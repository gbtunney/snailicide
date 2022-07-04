import {useStyleTag, UseStyleTagOptions} from "@vueuse/core";
import Processor from "windicss";
import type {Config} from "windicss/types/interfaces";


import {replaceCharacters, trimCharacters,} from "@snailicide/g-library"
import {ref} from 'vue'
import * as R from "ramda";

export type windiCSS = typeof useWindiCSS
export const useWindiCSS = (config: Config = {}) => {
    const processor = ref(new Processor(config))
    const extractStylesFromHTML = (el: HTMLElement, includeNestedHTML = true) => {
        const classString = R.join(" ", Array.from(el.classList))
        let {success, ignored} = processor.value.interpret(classString)
        const {styleSheet} = processor.value.interpret(classString)
        if (includeNestedHTML) {
            const result = compileCSS(el.innerHTML, true)
            if (result !== undefined) {
                const {id} = result
            }
            if (styleSheet.children.length > 0) styleSheet.add(styleSheet.children)
            return result
            // success = [...success, ...html_success]
            //ignored = [...ignored, ...html_ignored]
        }
        //const compiled = html_styleSheet.build()\
        return {success, ignored, styleSheet}
    }
    const interpretWindiStyles =
        (value: string[] | string, config: Config | undefined = undefined, logging = true) => {
            if (config) processor.value = new Processor(config)

            const val_replaced = replaceCharacters(
                {
                    value: (value).toString(),
                    pattern: ["  ", ","],
                    replacement: " ",
                }) as string
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
        if (styleSheetCompiled !== undefined) {
            const result = useStyleTag(styleSheetCompiled, styleTagOptions)
            return result
        }
        return undefined
    }
    const getClassString = (value: Array<string>): string => R.join(" ", value)
    const masterReg = /\${([\s\S]+?)}/g

    return {
        interpretWindiStyles,
        compileCSS,
        extractStylesFromHTML
    }
}
export default useWindiCSS
