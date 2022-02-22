<script lang="ts" setup>
import {toRefs, ref, Ref, defineProps, defineEmits, withDefaults,} from 'vue';
import useWindiCSS from "./../composable/useWindiCSS";

enum errs {
  Ignored = "ignored",
  Success = "success",
  NotFound = "NOT_FOUND"
}

const emit = defineEmits<{
  (e: 'change', classes: string): void
  (e: errs.Ignored, value: string | string[]): void
}>()

const props = withDefaults(defineProps<{ value?: string, labels?: string[] }>(), {
  value: 'this is gillian',
  labels: () => ['one', 'two']
})
const {value: classes_string, labels} = toRefs(props)

/*
const classes_string = computed(() => {
  console.log("THHE PROP HAS UPDATED!!", props.value)
  return props.value});
*/
//emit( errs.Ignored, errs.NotFound )
import windiConfig from "@/windi.config.obj";

const styleProcessor = useWindiCSS({config: windiConfig})

const styleSheet: Ref = ref("")
const classes: Ref = ref("")
const failure: Ref = ref("")

const colors = {
  "wacky": {
    "DEFAULT": "#efc618",
    "50": "#fefcf3",
    "100": "#fdf9e8",
    "200": "#fbf1c5",
    "300": "#f9e8a3",
    "400": "#f4d75d",
    "500": "#efc618",
    "600": "#d7b216",
    "700": "#b39512",
    "800": "#8f770e",
    "900": "#75610c"
  }
}
const {getWindiStyles, injectWindiStyles, getShortCut} = styleProcessor
import {debouncedWatch} from '@vueuse/core'

debouncedWatch(
    classes_string,
    (value) => {
      const {success, ignored, compiled, classes} = getWindiStyles((value).toString(), {colors})
      console.warn('classes_string ---- changed!: ', success, compiled, ignored)
      styleSheet.value = compiled
      failure.value = ignored
    },
    {debounce: 1000}
)
//console.log(">>>>",getShortCut("gillian",".bg-red-200, hover:bg-green-200 border-8 border"))
</script>

<template>
  <div class="WindiCSSGenerator w-1/2">
    <div v-if="classes.length>0">Success: <span>{{ classes }}</span></div>
    <div v-if="failure.length>0" class="bg-red-400">Failure: <span>{{ failure }}</span></div>
    <code class="bg-gray-300 border-gray-800">
      {{ styleSheet }}
    </code>
  </div>
</template>
