import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config,Theme,BaseTheme,Shortcut} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'
import {defineConfig} from "windicss/helpers";
import {transformString,replaceCharacters,PlainObject} from "@snailicide/g-library"
import { template,templateSettings} from 'lodash'
import * as R from "ramda";
import windiConfig from "@/windi.config.obj";


export type IWindiConfig = ReturnType<typeof defineConfig>
type ITheme = Theme|Partial<BaseTheme> //  Extract<Extract<IWindiConfig,"theme">,"extend">

export const useWindiCSS = (config: IWindiConfig = {}) => {
    const processor = new Processor(config)
    const completions = Object.freeze(generateCompletions(processor))
    const {interpret, validate, extract, allTheme: theme, allVariant: variants} = processor
    //processor.addVariant()
    /*processor.addVariant('gillian', ({modifySelectors}) => {
        return modifySelectors(({className}) => {
            return `.gilliann ${className}`
        })
    })
    processor.addDynamic('gillian', ({Utility, Style}) => {
        return Utility.handler
            .handleStatic("red")
            .createProperty('bg')
    })*/
    //processor.addVariant('gillian')
    console.log("useWindiCSS config" ,config ,processor.allConfig,completions)
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
        value = <string>transformString(replaceCharacters((value).toString(), ["  ", ","], " "), [ "'", '"'], "clean")
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
    const injectCSS = (value: string|false,  style_tag_options: UseStyleTagOptions) => {
        if (!value) return
        return useStyleTag(value as string, style_tag_options)
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
       // console.warn("ERROR getDynamicValue", _obj,template,_value)
        return _value
    }

    return {
        config,
        interpret, validate, extract, theme, variants,completions, processor,
        getWindiStyles, injectWindiStyles, getShortCut, getDynamicValue,getDynamicKey,getAttrs,injectCSS
    }
}
export default useWindiCSS
