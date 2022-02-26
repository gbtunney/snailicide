<script lang="ts">
export default {
  name: "WindiCSSGroup",
}
</script>
<script lang="ts" setup>
import * as R from "ramda"
import {
  toRefs,
  computed,
  ref,
  Ref,
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  ComputedRef
} from 'vue';
//window.document.addEventListener('click'), this.onClickApp)
import windiConfig from "@/windi.config.obj";
import WindiCSSInput from './WindiCSSInput.vue';
import MarkdownViewer from './../markdown/MarkdownViewer.vue';
import {PlainObject} from '@snailicide/g-library';
import {FullConfig} from "windicss/types/interfaces";

enum events {
  Ignored = "ignored",
  Success = "success",
  NotFound = "NOT_FOUND",
  Change = "change"
}
import WindiVariantList from './WindiVariantList.vue';
const variantList = defineComponent(WindiVariantList)
const markdownComponent = defineComponent(MarkdownViewer)
const windicomponent = defineComponent(WindiCSSInput)
const emits = defineEmits<{
  (e: events.Change, value: string[]): void
  (e: events.Ignored, value: string[], index: number): void
  (e: events.Success, value: string[], index: number): void
}>()

const props = withDefaults(defineProps<{ myvalue?: Array<string[] | string>, name?: string, index?: undefined | number, inject?: boolean }>(), {
  myvalue: () => [['chroma:bg-[#ff0000]'], 'hover:(bg-red-200 text-black)', ['hover:(bg-red-200 sm:text-black)']],
  index: 22,
  name: "WindiCSSInput",
})

const {index, name, myvalue} = toRefs(props)
const config: ComputedRef<FullConfig> = computed(() => {
  return windiConfig
});
const selectors = ref(myvalue.value)
const selectorsCompiled: Ref<string[][]> = ref(selectors.value.map(() => []))

const updateStyles = (classes, index) => {
  selectorsCompiled.value[index] = classes
  const newselectorsCompiled = selectorsCompiled.value.reduce((accumulator, currentValue) => R.concat(accumulator, currentValue), []);
  emits(events.Change, newselectorsCompiled)
}
const addSelector = () => {
  selectors.value = [...selectors.value, ""]
}
</script>
<template>
  <div class="WindiCSSGenerator w-1/2 bg-gray-200 ">
    <span><h1>{{ windicomponent.name }} </h1><button class="btn btn-green" @click="addSelector">Add {{ windicomponent.name }}</button></span>
    <div v-for="(selector,index) of selectors"
        :key="index">
      <component :is="windicomponent"
          :config="config"
          :name="windicomponent.name"
          :value="selector"
          :index="index"
          class="bg-gray-400 mb-2"
          @change="updateStyles"
          @success="updateStyles"/>
      <WindiVariantList :config="config"/>
      <MarkdownViewer></MarkdownViewer>
    </div>
    <hr>
  </div>
</template>
