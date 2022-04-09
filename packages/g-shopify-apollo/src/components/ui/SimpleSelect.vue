<template>
  <div class="SimpleSelect">
    <select v-model="selected" @change="$emit('change',selected)">
      <option disabled value="">Please select one</option>
      <option v-for="(option , index) in options"
          :label="option"
          :value="option"
          :key="index"/>
    </select>
  </div>
</template>
<script lang="ts" setup>
import {ref, defineProps, defineEmits, withDefaults} from 'vue';

const props = withDefaults(defineProps<{ value?: string, options?: string[] }>(), {
  value: '',
  options: () => [],
})
const emit = defineEmits<{
  (e: "change", emitvalue: string): void
}>()
const selected = ref(props.value)
</script>
