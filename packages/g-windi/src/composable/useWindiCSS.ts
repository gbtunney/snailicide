import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import {Config} from "windicss/types/interfaces";

import {replaceCharacters, trimCharacters,} from "@snailicide/g-library"
import {ref} from 'vue'
import * as R from "ramda";

export type windiCSS = typeof useWindiCSS
export const useWindiCSS = (config: Config = {}) => {
    const processor = ref(new Processor(config))
    const extractStylesFromHTML = (el: HTMLElement, includeNestedHTML = true, _processor = processor.value) => {
        const classString = R.join(" ", Array.from(el.classList))
        let {success, ignored} = _processor.interpret(classString)
        const {styleSheet} = _processor.interpret(classString)

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
    const interpretWindiStyles =
        (value: string[] | string, config: Config | undefined = undefined, logging = true) => {
            if (config) processor.value = new Processor(config)

            const val_replaced = replaceCharacters(
                {
                    value: (value).toString(),
                    pattern: ["  ", ","],
                    replacement: " ",
                })
            const val_trimmed = trimCharacters(
                {
                    value: val_replaced,
                    pattern: [".", "'", '"', "[", "]"],
                })
            const {styleSheet, success, ignored} = processor.value.interpret(val_trimmed)
            const styleSheetCompiled: string | undefined = processor.value.validate(val_trimmed) ? styleSheet.build(false) : undefined
            if (logging) {
                console.log("WindiCSS Processor: ", "\nstyleSheet:", styleSheet, "\nsuccess:", success, "\nignored::", ignored, "\nstyleSheetCompiled:\n", styleSheetCompiled)
            }
            return {
                styleSheet, success, ignored, styleSheetCompiled
            }
        }
    const compileCSS = (value: string[] | string, inject: boolean, styleTagOptions: UseStyleTagOptions = {}) => {
        const {styleSheetCompiled} = interpretWindiStyles(value)
        const result = useStyleTag(styleSheetCompiled, styleTagOptions)
        return result
    }
    const getClassString = (value: Array<string>): string => R.join(" ", value)
    const masterReg = /\${([\s\S]+?)}/g

    return {
        interpretWindiStyles,
        compileCSS
    }
}
export default useWindiCSS
