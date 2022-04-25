<template>
  <div class="SimpleSelect">
    <button class="bg-red-600" @click="getLabel(options[0])">jjjjjjjjjj</button>
    <select v-model="selected" @change="$emit('change',selected)">
      <option disabled value="">Please select one</option>
      <option v-for="(option , index) in options"
          :selected="(option=== selected)"
          :label="getLabel(option)"
          :value="option"
          :key="index">
      </option>
    </select>
  </div>
</template>
<script lang="ts" setup>
import {defineEmits, defineProps, ref, toRefs, withDefaults} from 'vue';
import * as RA from "ramda-adjunct"

import {PlainObject} from '@snailicide/g-library'
type OptionValue = PlainObject | string | number

const props = withDefaults(defineProps<{
  value?: OptionValue,
  options?: OptionValue[]
  label?: string | undefined,
}>(), {
  value: undefined,
  options: () => [],
  label: undefined,
})

const emit = defineEmits<{
  (e: 'change', option?: OptionValue): void
}>()
const {label, options} = toRefs(props)

// MAKE PROP INTO 2-WAY BINDING FOR V-MODEL
const selected = ref(props.value)

const getLabel = (_option: PlainObject | string | number): string | undefined => {
  if (_option !== undefined) {
    if (RA.isObject(_option)) {
      _option = _option as PlainObject
      return (label.value !== undefined && _option[label?.value])
          ? _option[label?.value]
          : (Object.values(_option).length > 0)
              ? Object.values(_option)[0]
              : "--option--"
    }
  }
}
</script>
