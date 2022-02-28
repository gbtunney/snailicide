<script setup lang="ts">
import * as RA from "ramda-adjunct"
import {
  computed,
  defineProps,
  withDefaults,
  toRefs,
  onMounted,
  ref, watch,
  defineComponent,
  ComputedRef,
} from 'vue'
import {templateRef} from '@vueuse/core'

/* * Import Highlighht.js and prettier * */
import 'highlight.js/lib/common';
import hljs from 'highlight.js/lib/core';

const hlJS = hljs
import hljsVuePlugin from "@highlightjs/vue-plugin";

const highlightjs = defineComponent(hljsVuePlugin.component)
/*"angular", "babel", "babel-flow", "babel-ts", "css", "espree", "flow", "glimmer", "graphql", "html", "json", "json-stringify", "json5", "less", "lwc", "markdown", "mdx", "meriyah", "scss", "typescript", "vue" or "yaml", but received ["babel", "json"].*/
import prettier from "prettier";
import parserBabel from 'prettier/parser-babel';
import parserHtml from "prettier/parser-html"

const props = withDefaults(defineProps<{ code?: string, language?: CodeLanguage, formatting?: boolean, autodetect?: undefined | boolean }>(), {
  code: "",
  language: 'auto', //  autodetect:true,s
  formatting: true
})
type ModeType = 'SLOT_MODE' | 'PROP_MODE';
type CodeLanguage = 'html' | 'css' | 'js' | 'ts' | 'markup' | 'json' | 'vue' | 'javascript' | 'auto';

const {formatting, language} = toRefs(props)
const code = ref(props.code)
const codeBlockSlot = templateRef('codeBlockContent')

const Mode: ComputedRef<ModeType> = computed(() => (RA.isEmptyString(props.code)) ? "SLOT_MODE" : "PROP_MODE")

watch(() => props.code, (currentValue) => {
  console.log("watch : changed (props.code)", currentValue);
  code.value = getFormattedCode(currentValue)
});

const getFormattedCode = (_code: string, _language = language.value, _formatting = formatting.value) => {
  return (_language !== 'auto' && _formatting === true)
      ? prettier.format((_code).toString(), {
        parser: _language,
        plugins: [parserHtml, parserBabel],
      }) : _code
}
const setCodeBlockContentFromSlot = (_value: HTMLElement | SVGElement): void => {
  if (Mode.value === "SLOT_MODE"
      && RA.isEmptyString(code.value)
      && _value
      && _value.innerHTML) {
    code.value = getFormattedCode(_value.innerHTML, "html")
  }
}
onMounted(() => {
  /* * Get the slot content !! * */
  setCodeBlockContentFromSlot(codeBlockSlot.value)
})
</script>
<template>
  <div>
    <highlightjs
        :language="language"
        :code="code"/>
    <div ref="codeBlockContent">
      <slot>
        <h2>Code Block Slot</h2>
      </slot>
    </div>
  </div>
</template>
