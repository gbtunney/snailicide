import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config,Theme,BaseTheme,Shortcut} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'
import {defineConfig} from "windicss/helpers";
import {transformString,replaceCharacters} from "@snailicide/g-library"
import { template,templateSettings} from 'lodash'

export type IWindiConfig = ReturnType<typeof defineConfig>
type ITheme = Theme|Partial<BaseTheme> //  Extract<Extract<IWindiConfig,"theme">,"extend">

export const useWindiCSS = (config: IWindiConfig = {}) => {
    const processor = new Processor(config)
    const completions = Object.freeze(generateCompletions(processor))
    const {interpret, validate, extract, allTheme: theme, allVariant : variants} = processor

    const getWindiStyles = (value: string[] | string, theme: Partial<BaseTheme> | undefined = undefined, extend = true) => {
        const _processor: Processor
            = (theme !== undefined)
            ? new Processor((extend === true)
                ? {theme: {extend: theme}}
                : {theme})
            : processor
        value = <string>transformString(replaceCharacters((value).toString(), ["  ", ","], " "), [".", "'", '"'], "clean")
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
            ...interpretedString, compiled, classes: ( success.length > 0 ) ? getClassString(success) : false
        }
    }
    const getClassString = (value: Array<string>): string =>
        transformString(
            replaceCharacters((value).toString(), [","], " "),
        ["[", "]"], "clean")

    /* * Inject the build style string into the <head> * */
    const injectWindiStyles = (value: string[] | string, windi_config: Partial<BaseTheme> | undefined = undefined, style_tag_options: UseStyleTagOptions) => {
        if (!getWindiStyles(value, windi_config).compiled) return
        return useStyleTag(getWindiStyles(value).compiled as string, style_tag_options)
    }
    const masterReg = /\${([\s\S]+?)}/g
    const lTemplate = template
    const getDynamicKey = ( value :string, exp =  masterReg) : string|false=>{
        const array = [...new String(value).matchAll( exp )];
        if (array && array.length>0 ) {
            const [[,key="not set" ]="not set"]= array
            return key
        }else return false
    }
    const getDynamicValue = ( value :number|string|undefined, template : string|undefined, exp =  masterReg) : string|false=>{
        const key = getDynamicKey( template );
        if ( key === false  || value ===undefined || template===undefined) {
            console.error("ERROR getDynamicValue", {key,value,template})
            return false
        }
        const _obj = { [key]:value }
        templateSettings.interpolate = exp
        const _value  = lTemplate(template)(_obj)
        return _value
    }

    return {
        config,
        interpret, validate, extract, theme, variants,completions, processor,
        getWindiStyles, injectWindiStyles, getShortCut, getDynamicValue,getDynamicKey
    }
}
export default useWindiCSS
