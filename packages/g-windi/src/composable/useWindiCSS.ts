import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'
import {defineConfig} from "windicss/helpers";

export type IWindiConfig = ReturnType<typeof defineConfig>

export const useWindiCSS = (config: IWindiConfig = {}) => {
    const processor = new Processor(config)
    const completions = Object.freeze(generateCompletions(processor))
    const {interpret, validate, extract, allTheme: theme} = processor

    const getWindiStyles = (value: string[] | string, windi_config: Config | undefined = undefined) => {
        const _processor: Processor = (windi_config !== undefined) ? new Processor(windi_config) : processor
        value = (value).toString()
        const {styleSheet} = _processor.interpret(value)
        const compiled: string | undefined = _processor.validate(value) ? styleSheet.build(true) : undefined
        return {
            ..._processor.interpret(value), compiled
        }
    }
    /* * Inject the build style string into the <head> * */
    const injectWindiStyles = (value: string[] | string, windi_config: Config | undefined = undefined, style_tag_options: UseStyleTagOptions) => {
        if (!getWindiStyles(value, windi_config).compiled) return
        return useStyleTag(getWindiStyles(value).compiled as string, style_tag_options)
    }
    return {
        config,
        interpret, validate, extract, theme, completions, processor,
        getWindiStyles, injectWindiStyles
    }
}
export default useWindiCSS
