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

const props = withDefaults(defineProps<{  config?: PlainObject }>(), {
})
const {config} = toRefs(props)

const undefinedId = randomInt(0, 20000);
const styleProcessor = useWindiCSS(config.value)
const {getWindiStyles, injectWindiStyles, injectCSS ,processor,variants,getDynamicKey} = styleProcessor
const variant_list = ref(variants)

</script>
<template>
  <div class="WindiCSSGenerator w-1/2">
   <h1>Variants</h1>
    {{variants}}
  </div>
</template>
