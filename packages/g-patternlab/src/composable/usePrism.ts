import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'

import {computed, toRefs,ref,Ref} from "vue";
export type CodeLanguage = 'html' | 'css' | 'js' | 'ts' | 'markup' | 'json' | 'vue' | 'javascript';

interface props {
    lang: CodeLanguage
}

export const usePrism = (_lang: Ref<CodeLanguage>) => {
    const lang = _lang//toRefs(props)
    const getHighlight = (code: string) => Prism.highlight(code || '', Prism.languages[lang.value], lang.value)
    const prismClass = computed(() => `language-${lang.value}`)
    return {Prism, getHighlight, prismClass}
}
export default usePrism
