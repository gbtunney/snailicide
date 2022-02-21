import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config,Theme,BaseTheme,Shortcut} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'
import {defineConfig} from "windicss/helpers";
import {transformString,replaceCharacters} from "@snailicide/g-library"

export type IWindiConfig = ReturnType<typeof defineConfig>
type ITheme = Theme|Partial<BaseTheme> //  Extract<Extract<IWindiConfig,"theme">,"extend">

export const useWindiCSS = (config: IWindiConfig = {}) => {
    const processor = new Processor(config)
    const completions = Object.freeze(generateCompletions(processor))
    const {interpret, validate, extract, allTheme: theme} = processor

    const getWindiStyles = (value: string[] | string, theme: Partial<BaseTheme> | undefined = undefined, extend = true) => {
        const _processor: Processor = (theme !== undefined) ? new Processor((extend === true) ? {theme: {extend: theme}} : {theme}) : processor
        value = transformString(replaceCharacters((value).toString(), ["  ", ","], " ") as string, [".", "'", '"', "[", "]"], "clean") as string
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
        value = transformString(replaceCharacters((value as string).toString(), ["  ", ","], " ") as string, [".", "'", '"', "[", "]"], "clean") as string
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
            ...interpretedString, compiled, classes: getClassString(success)
        }
    }
    const getClassString = (value: Array<string>) => {
        return transformString(replaceCharacters((value).toString(), [","], " ") as string, ["[", "]"], "clean")
    }
    /* * Inject the build style string into the <head> * */
    const injectWindiStyles = (value: string[] | string, windi_config: Partial<BaseTheme> | undefined = undefined, style_tag_options: UseStyleTagOptions) => {
        if (!getWindiStyles(value, windi_config).compiled) return
        return useStyleTag(getWindiStyles(value).compiled as string, style_tag_options)
    }
    return {
        config,
        interpret, validate, extract, theme, completions, processor,
        getWindiStyles, injectWindiStyles, getShortCut
    }
}
export default useWindiCSS
