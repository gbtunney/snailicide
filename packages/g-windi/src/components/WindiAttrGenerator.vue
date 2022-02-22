<script lang="ts">
import {attr} from './../directives/DirectiveAttr';
export default {
  name:"WindiAttrGenerator",
  directives: {
    // enables v-focus in template
    attr
  }
}
</script>
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
import windiConfig from "@/windi.config.obj";

const styleProcessor = useWindiCSS({config: windiConfig})

const styleSheet: Ref = ref("")
const classes: Ref = ref("")
const failure: Ref = ref("")

const attrObj = ref('{}')
const testing:Ref<any> = ref("")
console.log("REFSS" , testing)
const {getWindiStyles, injectWindiStyles, getShortCut} = styleProcessor
import {debouncedWatch} from '@vueuse/core'

</script>

<template>
  <div class="WindiCSSGenerator w-1/2">
    <textarea v-model="attrObj" placeholder="add multiple lines"></textarea>
    <button  v-attr classes="text-white hover:(border-orange-800 border-8)" hover="text-red-500" bg="red-500">ATTR</button>
    <div v-if="classes.length>0">Success: <span>{{ classes }}</span></div>
    <div v-if="failure.length>0" class="bg-red-400">Failure: <span>{{ failure }}</span></div>
    <code class="bg-gray-300 border-gray-800">
      {{ styleSheet }}
    </code>
  </div>
</template>
