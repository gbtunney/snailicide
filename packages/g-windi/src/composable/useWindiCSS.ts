import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config, Theme, BaseTheme, Shortcut} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'
import {defineConfig} from "windicss/helpers";
import {transformString, replaceCharacters, PlainObject} from "@snailicide/g-library"
import {template, templateSettings} from 'lodash'
import {ref, Ref,readonly, toRefs, computed, ComputedRef,onMounted,ToRefs} from 'vue'
import {Map, List,fromJS} from 'immutable';
import {IWindiCSSState, useWindiCSSStore} from './stores/useWindiCSSStore'

import * as R from "ramda";
import useChroma, {Chromable,IChromaColorData} from "./useChroma";
import { defineStore,storeToRefs, Store,StoreProperties } from 'pinia'

export type IWindiConfig = ReturnType<typeof defineConfig>
type ITheme = Theme | Partial<BaseTheme> //  Extract<Extract<IWindiConfig,"theme">,"extend">
export const useWindiCSS = (config: IWindiConfig = {}) => {
    //todo: figure out hohw to overwrite this.
    const windiStore=  useWindiCSSStore()
    const {processor:_processor}=storeToRefs(windiStore)

    const processor: ComputedRef<Processor> = computed(() => (windiStore.isInitialized) ? _processor.value as Processor : new Processor())
    const completions = Object.freeze(generateCompletions(processor.value ))
   // const {interpret, validate, extract, allTheme: theme, allVariant: variants} = processor

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
        const {getChromaColor,validate} = useChroma()

        return Map(Object.entries(flattenColorPalette(colors)).reduce((accumulator, [key, value], currentIndex, array) => {
            const _color = value as Chromable
            if (!validate(_color)) console.warn("Color:", key, " Value: ", value, " is not a valid chromajs color")
            return {...accumulator, ...{[key]: validate(_color) ? getChromaColor(_color) : {}}}
        }, {} as ArrayLike<any>))
    }

    const utilities = {
        colorPalatteMap,
        flattenColorPalette
    }
    const extractStylesFromHTML = (el: HTMLElement, includeNestedHTML = true, _processor = processor.value) => {
        const classString = R.join(" ", Array.from(el.classList))
        let {success, ignored} = _processor.interpret(classString)
        const { styleSheet} = _processor.interpret(classString)

        if (includeNestedHTML) {
            const {
                success: html_success,
                ignored: html_ignored,
                styleSheet: html_styleSheet
            } = _processor.interpret(el.innerHTML)
            if (styleSheet.children.length > 0) styleSheet.add(styleSheet.children)
            success = [...success, ...html_success]
            ignored = [...ignored, ...html_ignored]
        }
        const compiled = styleSheet.build()
        return {success, ignored, styleSheet, compiled}
    }

    const getAttrs = (value = {}, theme: Partial<BaseTheme> | undefined = undefined, extend = true) => {
        const _processor: Processor
            = (theme !== undefined)
            ? new Processor((extend === true)
                ? {theme: {extend: theme}}
                : {theme})
            : processor.value
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
            : processor.value
        value = <string>transformString(replaceCharacters((value).toString(), ["  ", ","], " "), ["'", '"'], "clean")
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
        return _value
    }
    return {...processor,
        config,
        extractStylesFromHTML,
     completions,
        getWindiStyles, injectWindiStyles, getShortCut, getDynamicValue, getDynamicKey, getAttrs, injectCSS,flattenColorPalette,utilities
    }
}
export default useWindiCSS
