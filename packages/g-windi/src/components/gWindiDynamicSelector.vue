<script lang="ts" setup>
import {template, templateSettings} from 'lodash'
import {
  Component,
  computed,
  ComputedRef,
  defineComponent,
  defineEmits,
  defineProps,
  Ref,
  ref,
  toRefs,
  withDefaults
} from "vue";
import VueMultiselect from 'vue-multiselect'

defineComponent(VueMultiselect)

enum errs {
  Ignored = "ignored",
  Success = "success",
  NotFound = "NOT_FOUND"
}

const emit = defineEmits<{
  (e: 'change', classes: string, index: number | undefined): void
  (e: errs.Ignored, value: string | string[]): void
}>()
const props = withDefaults(defineProps<{ index?: number, inject?: boolean }>(), {
  index: undefined,
  inject: false
})

const {index, inject} = toRefs(props)

import useWindiCSS from "@/composable/useWindiCSS";
import windiConfig from "@/windi.config.obj";

const styleProcessor = useWindiCSS({config: windiConfig})

const {getWindiStyles, injectWindiStyles, getDynamicValue, getDynamicKey} = styleProcessor
const {variants, completions: {static: staticclasses, color: colors, dynamic}} = styleProcessor

const selected_dynamic: Ref<string> = ref("")
const selectorKey: ComputedRef<string> = computed(() => {
  if (selected_dynamic.value && selected_dynamic.value.length > 0) {
    return getDynamicKey(selected_dynamic.value) as string
  }
  return ""
});
const value_string = ref("")
const class_string: Ref<string> = ref("")

const updateStyles = () => {
  const dynamicVal = (getDynamicValue(value_string.value, selected_dynamic.value)) ? getDynamicValue(value_string.value, selected_dynamic.value) as string : ""
  if (dynamicVal.length > 0) {
    const {classes} = getWindiStyles(dynamicVal)
    if (inject) injectWindiStyles(classes, undefined, {id: `vueuse_styletag_${index.value}`})

    class_string.value = classes
    console.log("STYLE UPDATEDD ", classes, dynamicVal)
  } else class_string.value = ""
}
const updateSelection = () => {
  value_string.value = ""
  /*  const _selectedColors = (selected_colors.value && selected_colors.value.length) ? Array.from(selected_colors.value) : []
    const arr = _selectedColors.concat((selected_classes.value && selected_classes.value.length) ? Array.from(selected_classes.value) : [])
    const preString = (selected_variant.value) ? `${selected_variant.value}:( ${arr.toString()} )` : arr.toString()
    const {classes} = getWindiStyles(preString)
    classes_string.value = classes
    if (inject) injectWindiStyles(classes, undefined, {id: `vueuse_styletag_${index.value}`})
    emit("change", classes, index.value)
    console.log("updated!!", preString, classes, emit)*/
}
// v-model="selected_variant"
// v-model="selected_classes"
//@change="InjectWindiStyles"\


</script>

<template>
  <div class="gWindiSelector">

    <h2>{{ index }}</h2>
    <div class="flex ">
      <div class="w-1/2 flex items-center">
        Dynamic Class:
        <VueMultiselect
            :options="dynamic"
            v-model="selected_dynamic"
            autocomplete="on"
            searchable
            @update:model-value="updateSelection"
        />
        <div><span><span class="font-bold">key:</span> {{ selectorKey }}</span>
          <input type="text" @input="updateStyles" v-model="value_string">
        </div>

      </div>
    </div>
    <div>classes string : <span border="gray-500">{{ class_string }}</span></div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
