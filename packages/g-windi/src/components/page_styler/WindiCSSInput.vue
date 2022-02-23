<script lang="ts">
export default {
  name: "WindiCSSInput",
}
</script>
<script lang="ts" setup>
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {toRefs, ref, Ref, defineProps, defineEmits, withDefaults, onMounted} from 'vue';
import {randomInt, PlainObject} from "@snailicide/g-library";
import useWindiCSS from "./../../composable/useWindiCSS";

enum events {
  Ignored = "ignored",
  Success = "success",
  NotFound = "NOT_FOUND",
  Change = "change"
}

const emits = defineEmits<{
  (e: events.Change, value: string[], index?: number, id?: string): void
  (e: events.Ignored, value: string[], index?: number): void
  (e: events.Success, value: string[], index?: number, id?: string): void
}>()

const props = withDefaults(defineProps<{ value?: string | string[], name?: string, config?: PlainObject, index?: undefined | number, inject?: boolean }>(), {
  value: 'bg-red-600',
  name: "vue-use",
})
const {index, name, value: default_value, config} = toRefs(props)
const inputvalue: Ref<string> = ref((RA.isArray(default_value.value)) ? R.join(" ", default_value.value) : default_value.value)
const success_arr: Ref<string[]> = ref([])
const ignored_arr: Ref<string[]> = ref([])
const undefinedId = randomInt(0, 20000);
const styleProcessor = useWindiCSS(config.value)
const {getWindiStyles, injectWindiStyles, injectCSS} = styleProcessor

const updateStyles = () => {
  const {success, ignored, compiled, processor} = getWindiStyles(inputvalue.value)
  const id = RA.isNotUndefined(index.value) ? `${name.value}-${index.value}` : `${name.value}-${undefinedId}`
  injectCSS(compiled, {id})
  emits(events.Success, success, index.value, id)
  emits(events.Ignored, ignored, index.value)
  success_arr.value = success
  ignored_arr.value = ignored
  console.log("updated styles", id, success, index.value)
}
onMounted(updateStyles)
</script>
<template>
  <div class="WindiCSSGenerator w-1/2">
    <div class="text-sm bg-red-500 text-white" v-if="ignored_arr.length">Ignored: {{ ignored_arr }}</div>
    <div class="text-sm bg-green-500 text-white" v-if="success_arr.length">Success: {{ success_arr }}</div>
    <input v-model="inputvalue" type="text"/>
    <button @click="updateStyles">Compile</button>
  </div>
</template>
