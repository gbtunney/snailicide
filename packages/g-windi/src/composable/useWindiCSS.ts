import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config} from "windicss/types/interfaces";
import {generateCompletions} from 'windicss/utils'

export interface UseWindiCSSOptions extends UseStyleTagOptions {
    config?: Config
}

export const useWindiCSS = (options: UseWindiCSSOptions = {}) => {
    ///windi config.
    const {config} = options
    const processor = new Processor(config)
    const completions = Object.freeze(generateCompletions(processor))

    const getInterprettedStylesheet = function (value: string) {
        const {success, ignored, styleSheet} = processor.interpret(value)
        const {id, css: injectedStylesheet} = useStyleTag( styleSheet.build(true), options)
        return {success, ignored, id, injectedStylesheet}
    }
    return {config, completions,processor, getInterprettedStylesheet}
}
export default useWindiCSS
