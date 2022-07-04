<script setup lang="ts">
    import {
        computed,
        defineProps,
        withDefaults,
        toRefs,
        Ref,
        ref,
        defineComponent,
        ComputedRef,
    } from 'vue'
    import usePrism, {CodeLanguage} from './../../composable/usePrism';
    import SimpleSelect from './../../components/generic/SimpleSelect.vue';

    defineComponent(SimpleSelect)

    const code_options = ['javascript', 'html', 'css', 'js', 'ts', 'markup', 'json', 'vue']
    const props = withDefaults(defineProps<{ code?: boolean | string, lang?: CodeLanguage }>(), {
        code: false
    })
    const {code: codeProp, lang} = toRefs(props)

    type ModeType = 'SLOT_MODE' | 'PROP_MODE';
    const Mode: ComputedRef<ModeType> = computed(() => (codeProp.value === false) ? "SLOT_MODE" : "PROP_MODE")
    const language: Ref<CodeLanguage> = ref((Mode.value === "SLOT_MODE") ? "html" : "js")

    if (lang.value) language.value = lang.value as CodeLanguage
    const {getHighlight, prismClass} = usePrism(language)
    const codeBlockWrapper = ref()

    const hightlightedContent: ComputedRef<any> = computed(() => {
        if (Mode.value === "PROP_MODE") return getHighlight((" ").concat((codeProp.value as string)))
        if (Mode.value === "SLOT_MODE"
            && codeBlockWrapper.value
            && codeBlockWrapper.value.innerHTML) return getHighlight((codeBlockWrapper.value.innerHTML).toString())
        return false
    })

    const langChanged = (value) => {language.value = value}
</script>
<template>
	<div>
    <span v-if="Mode === 'PROP_MODE'">
      <SimpleSelect :value="language" :options="code_options" @change="langChanged" class="w-1/6 border border-gray-500"/>
    </span>
		<ul v-if="false" class="list-disc">
			<li>MODE : {{ Mode }}</li>
			<li> language: {{ language }}</li>
			<li>Prismaclass: {{ prismClass }}</li>
		</ul>
		<pre class="overflow-auto" :class="prismClass">
      <code v-html="hightlightedContent"/>
  </pre>
		<div id="wrapper" :class="((Mode === 'PROP_MODE')) ? '':'hidden'">
      <pre ref="codeBlockWrapper" class="overflow-auto hidden" :class="prismClass">
        <slot v-bind:lang="language" v-bind:code="hightlightedContent">
          <code v-html="Mode === 'PROP_MODE' ? hightlightedContent : '<h2>NOT CONTENT SET</h2>'"/>
    </slot>
  </pre>
		</div>
	</div>
</template>
<style type="text/css" src="prismjs/themes/prism.css"></style>
