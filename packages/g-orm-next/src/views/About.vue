<script lang="ts" setup>
import {ref, watch, computed, Ref} from 'vue';
import {useProductByHandleQuery, ProductByHandleQueryVariables} from './../graphql/types/generated-types'
import {useResult} from '@vue/apollo-composable'
import {useProductParsing} from './../composable/useProductParsing';
import useOrmRepositories from "./../composable/useOrmRepositories";

const product_variables: Ref<ProductByHandleQueryVariables> = ref({
  handle: 'local',
})
const {ProductRepository} = useOrmRepositories()
const {parseDataProductFragment} = useProductParsing()
const {result, loading, error, onResult} = useProductByHandleQuery(product_variables)
const productQueryResult = useResult(result, undefined)
const getNewProduct = (variables: ProductByHandleQueryVariables) => {
  product_variables.value = variables
}
///need to run the parser hhere bc otherwise query needs to have edges? idk.
const _returnValue = ref()
const resultValue = computed({
  get: () => _returnValue.value,
  set: (value) => {
    console.log("resulttttt",  parseDataProductFragment(value))

    _returnValue.value = parseDataProductFragment(value)
  }
})
//query watcher.
watch(productQueryResult, (value) => {
  if (value) {
    resultValue.value = value
    const resp = ProductRepository.value.save(resultValue.value)
  }
})

</script>
<template>
  <div class="about" v-if="resultValue">
    <button @click="getNewProduct({handle:'local'})">local</button>
    <button @click="getNewProduct({handle:'balance'})">balance</button>
    {{ resultValue }}
  </div>
</template>
