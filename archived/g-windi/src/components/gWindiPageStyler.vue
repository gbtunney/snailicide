<script lang="ts" setup>
import {Component, defineComponent, computed, defineEmits, Ref, ref, ComputedRef} from "vue";
import gWindiSelector from "./gWindiSelector.vue"
import gWindiDynamicSelector from './gWindiDynamicSelector.vue'

defineComponent(gWindiSelector)
defineComponent(gWindiDynamicSelector)
const emit = defineEmits<{
  (e: 'change', classes: string): void
}>()
const selectors = ref([""])
const classes = ref("")

const _static = ref("")
const selectorChanged = (_classes, _index) => {
  //const {component= gWindiSelector , value=""} = selectors.value[_index]
  //const _obj = {component,value:_classes }
  selectors.value[_index] = _classes
  //  classes.value = _classes
  emit('change', classes_string.value)
}
const addSelector = () => {
  selectors.value[selectors.value.length] = ""
  console.log("adding", selectors.value)
}
const classes_string: ComputedRef<string> = computed(() => {
  return Array.from(selectors.value).reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`, "");
});

</script>
<template>
  <div class="gWindiPageStyler">
    selectors: <span class="border-red-600 border">{{ classes_string }}</span>
    <hr>
    <button class="btn btn-green" @click="addSelector"> Add selector</button>
    <gWindiSelector v-for='(selector,index) in selectors'
        :key='index' :index='index' inject @change="selectorChanged"/>
    <component :index="22" :is="gWindiDynamicSelector"  @change="selectorChanged"></component>
  </div>
</template>
