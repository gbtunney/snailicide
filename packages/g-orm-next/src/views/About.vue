<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  provide,
  defineComponent,
  PropType,
  Ref,
  SetupContext,
  Prop,
  defineProps,
  defineEmits,
  withDefaults
} from 'vue';
import {
  useProductByHandleQuery,
  ProductByHandleQuery, useProductByHandleLazyQuery,
  ProductByHandleDocument,
  ProductByHandleQueryVariables
} from './../graphql/types/generated-types'
import {useResult} from '@vue/apollo-composable'
// @ts-expect-error ffff
import {encode, decode} from 'shopify-gid'

const product_variables: Ref<ProductByHandleQueryVariables> = ref({
  handle: 'balance',
})
const {result, loading, error, onResult} = useProductByHandleQuery(product_variables);
const getData = (variables: ProductByHandleQueryVariables) => {
  product_variables.value = variables
}
const testResult = useResult(result, undefined)
const returnValue = ref()
watch(testResult, (value) => {
  console.log("testResult RESULT CHANGED!!@! raw!!", value)
  if (value) {
    returnValue.value = value
    console.log("testResult RESULT CHANGED!!@!", decode(value.id))
  }
})
watch(result, (value) => {
  console.log("RESULT CHANGED!!@! raw!!", value)
})
const testCompResult = computed(() => {
  return returnValue.value
})
</script>
<template>
  <div class="about" v-if="testCompResult">
    <button @click="getData({handle:'local'})">local</button>
    <button @click="getData({handle:'balance'})">balance</button>
    {{ testCompResult }}
  </div>
</template>

