<script lang="ts" setup>
import {Component, defineComponent, defineEmits, defineProps, Ref, ref, toRefs, withDefaults} from "vue";
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
const props = withDefaults(defineProps<{ index?: number, inject: boolean }>(), {
  index: undefined,
  inject: false
})

const {index, inject} = toRefs(props)

import useWindiCSS from "@/composable/useWindiCSS";
import windiConfig from "@/windi.config.obj";

const styleProcessor = useWindiCSS({config: windiConfig})

const {getWindiStyles, injectWindiStyles} = styleProcessor
const {variants, completions: {static: staticclasses, color: colors, dynamic}} = styleProcessor

const selected_variant = ref("")
const selected_classes: Ref<Array<string>> = ref([])
const selected_colors: Ref<Array<string>> = ref([])

const classes_string = ref("")

const updateStyle = () => {
  const _selectedColors = (selected_colors.value && selected_colors.value.length) ? Array.from(selected_colors.value) : []
  const arr = _selectedColors.concat((selected_classes.value && selected_classes.value.length) ? Array.from(selected_classes.value) : [])
  const preString = (selected_variant.value) ? `${selected_variant.value}:( ${arr.toString()} )` : arr.toString()
  const {classes} = getWindiStyles(preString)
  classes_string.value = classes
  if (inject) injectWindiStyles(classes, undefined, {id: `vueuse_styletag_${index.value}`})
  emit("change", classes, index.value)
  console.log("updated!!", preString, classes, emit)
}
</script>
<template>
  <div class="gWindiSelector">

    <h2>{{ index }}</h2>
    <div class="flex ">
      <div class="w-1/4 flex items-center">
        Variants:
        <VueMultiselect
            :options="variants"
            v-model="selected_variant"
            autocomplete="on"
            searchable
            @update:model-value="updateStyle"
        />
        {{ selected_variant }}
      </div>
      <div class="w-1/2 flex items-center">
        Windi Classes
        <VueMultiselect
            :options="staticclasses"
            v-model="selected_classes"
            @update:model-value="updateStyle"
            multiple
            taggable
        />
      </div>
      <div class="w-1/2 flex items-center">
        Color Classes
        <VueMultiselect
            :options="colors"
            v-model="selected_colors"
            @update:model-value="updateStyle"
            multiple
            taggable
        />
      </div>
    </div>
    <div>classes string : <span border="gray-500">{{ classes_string }}</span></div>
    <hr>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
