<script lang="ts">
export default {
  name:"WindiCSSInput",
}
</script>
<script lang="ts" setup>
import {toRefs, ref, Ref, defineProps, defineEmits, withDefaults,} from 'vue';
import windiConfig from "@/windi.config.obj";
import useWindiCSS from "./../../composable/useWindiCSS";

enum events {
  Ignored = "ignored",
  Success = "success",
  NotFound = "NOT_FOUND",
  Change = "change"
}
const emits = defineEmits<{
  (e: events.Change, value: string[],index:number): void
  (e: events.Ignored, value: string[],index:number): void
  (e: events.Success, value: string[],index:number): void
}>()

const props = withDefaults(defineProps<{ value?: string,  name?: string, index?: undefined|number, inject?: boolean }>(), {
  value: 'bg-red-600',
  index: 22,
  name:"WindiCSSInput"
})
const {value: classes_string,index,name} = toRefs(props)
const inputvalue = ref( classes_string.value)

const styleProcessor = useWindiCSS({config: windiConfig})
const {getWindiStyles, injectWindiStyles,injectCSS} = styleProcessor

const updateStyles =()=>{
  const {success,ignored,compiled} = getWindiStyles( inputvalue.value )
const id =  `${name.value}-${index.value}`
  injectCSS(compiled, {id })
  emits( events.Success ,success,index.value )
  emits( events.Ignored ,ignored ,index.value )
  console.log("updated styles", id)
}
/*
const classes_string = computed(() => {
  console.log("THHE PROP HAS UPDATED!!", props.value)
  return props.value});
*/
//emit( errs.Ignored, errs.NotFound )
</script>

<template>
  <div class="WindiCSSGenerator w-1/2">
    props: {{$props.value}}
    <input v-model="inputvalue" type="text"/><button @click="updateStyles">Compile</button>
  </div>
</template>
