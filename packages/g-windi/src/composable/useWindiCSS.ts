import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config, Theme, BaseTheme, Shortcut} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'
import {defineConfig} from "windicss/helpers";
import {transformString, replaceCharacters, PlainObject} from "@snailicide/g-library"
import {template, templateSettings} from 'lodash'
import {ref, readonly} from 'vue'
import {Map, List,fromJS} from 'immutable';

import * as R from "ramda";
import useChroma, {Chromable,IChromaColorData} from "./useChroma";

export type IWindiConfig = ReturnType<typeof defineConfig>
type ITheme = Theme | Partial<BaseTheme> //  Extract<Extract<IWindiConfig,"theme">,"extend">

const {getChromaColor,validate} = useChroma()
const flattenColorPalette = (colors: { [key: string]: string | { [key: string]: string } }) => {
    const _palatte = Object.freeze({
        ...Object.assign({}, ...Object.entries(colors || {}).flatMap(([color, values]) => typeof values == 'object' ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex
        })) : [{
            [`${color}`]: values
        }]))
    })
    return _palatte
}
const colorPalatteMap = (colors: { [key: string]: string | { [key: string]: string } }) : Map<string,IChromaColorData > => {
    return Map(Object.entries(flattenColorPalette(colors)).reduce((accumulator, [key, value], currentIndex, array) => {
        const _color = value as Chromable
        if (!validate(_color)) console.warn("Color:", key, " Value: ", value, " is not a valid chromajs color")
        return {...accumulator, ...{[key]: validate(_color) ? getChromaColor(_color) : {}}}
    }, {} as ArrayLike<any>))
}
export const utilities = {
    colorPalatteMap,
    flattenColorPalette
}
export const useWindiCSS = (config: IWindiConfig = {}) => {
    const processor = new Processor(config)
    const completions = Object.freeze(generateCompletions(processor))
    const {interpret, validate, extract, allTheme: theme, allVariant: variants} = processor
    const getAttrs = (value = {}, theme: Partial<BaseTheme> | undefined = undefined, extend = true) => {
        const _processor: Processor
            = (theme !== undefined)
            ? new Processor((extend === true)
                ? {theme: {extend: theme}}
                : {theme})
            : processor
        const myprocessor = _processor.attributify(value)
        const {styleSheet, success} = myprocessor
        const compiled = styleSheet.build(false)
        const tag = useStyleTag(compiled, {id: "vueuse_attrs"})

        return {
            ...myprocessor, compiled
        }
    }
    const getWindiStyles = (value: string[] | string, theme: Partial<BaseTheme> | undefined = undefined, extend = true) => {
        const _processor: Processor
            = (theme !== undefined)
            ? new Processor((extend === true)
                ? {theme: {extend: theme}}
                : {theme})
            : processor
        value = <string>transformString(replaceCharacters((value).toString(), ["  ", ","], " "), ["'", '"'], "clean")
        //console.log("cleaned before:", value, " after:", cleanString)
        const interpretedString: ReturnType<Processor["interpret"]> = _processor.interpret(value)
        const {styleSheet, success} = interpretedString
        const compiled: string | undefined = _processor.validate(value) ? styleSheet.build(false) : undefined
        return {
            processor: _processor,
            ...interpretedString, compiled,
            classes: getClassString(success)
        }
    }
    const getShortCut = (name: string, value: Shortcut, theme: Partial<BaseTheme> | undefined = undefined, extend = true) => {
        value = <string>transformString(replaceCharacters((value).toString(), ["  ", ","], " "), [".", "'", '"', "[", "]"], "clean")
        const shortcuts = {[name]: value}
        const _processor: Processor = (theme !== undefined) ? new Processor((extend === true) ? {
            shortcuts,
            theme: {extend: theme}
        } : {shortcuts, theme}) : new Processor({shortcuts})
        const interpretedString: ReturnType<Processor["interpret"]> = _processor.interpret(value)
        const {styleSheet, success} = interpretedString
        const compiled: string | undefined = _processor.validate(name) ? styleSheet.build(false) : undefined
        return {
            processor: _processor,
            ...interpretedString, compiled, classes: (success.length > 0) ? getClassString(success) : false
        }
    }
    const getClassString = (value: Array<string>): string => R.join(" ", value)

    /* * Inject the build style string into the <head> * */
    const injectWindiStyles = (value: string[] | string, windi_config: Partial<BaseTheme> | undefined = undefined, style_tag_options: UseStyleTagOptions) => {
        if (!getWindiStyles(value, windi_config).compiled) return
        return useStyleTag(getWindiStyles(value).compiled as string, style_tag_options)
    }
    const injectCSS = (value: string | false, style_tag_options: UseStyleTagOptions) => {
        if (!value) return
        return useStyleTag(value as string, style_tag_options)
    }
    const masterReg = /\${([\s\S]+?)}/g
    const lTemplate = template
    const getDynamicKey = (value: string, exp = masterReg): string | false => {
        const array = [...new String(value).matchAll(exp)];
        if (array && array.length > 0) {
            const [[, key = "not set"] = "not set"] = array
            return key
        } else return false
    }
    const getDynamicValue = (value: number | string | undefined, template: string | undefined, exp = masterReg): string | false => {
        const key = getDynamicKey(template);
        if (key === false || value === undefined || template === undefined) {
            console.error("ERROR getDynamicValue", {key, value, template})
            return false
        }
        const _obj = {[key]: value}
        templateSettings.interpolate = exp
        const _value = lTemplate(template)(_obj)
        // console.warn("ERROR getDynamicValue", _obj,template,_value)
        return _value
    }
    return {
        config,
        interpret, validate, extract, theme, variants, completions, processor,
        getWindiStyles, injectWindiStyles, getShortCut, getDynamicValue, getDynamicKey, getAttrs, injectCSS,flattenColorPalette,utilities
    }
}
export default useWindiCSS
