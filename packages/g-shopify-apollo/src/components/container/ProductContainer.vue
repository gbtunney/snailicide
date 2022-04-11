<script lang="ts" setup>
import {
  Component,
  toRefs,
  defineComponent,
  withDefaults,
  computed,
  defineProps,
  watch,
  defineEmits,
  Ref,
  ref,
  ComputedRef
} from "vue";
import {useProduct} from './../../operations/queries/useProduct';
import {useApolloClient} from "@vue/apollo-composable";

import SimpleSelect from './../ui/SimpleSelect.vue';
import {useVariantByIndexQuery, VariantByIndexDocument} from "@/types/generated/storefront-types";
const props = withDefaults(
    defineProps<{
      /**
       * Product Handle
       */
      handle?: string,

      /**
       * Variant ID or index
       */
      variant_id?: string | number

    }>(), {
      handle: undefined,
      variant_id: 1
    })
//defineComponent(SimpleSelect)
watch(props, (value) => {
  console.warn("watch :value", value)
})

const {handle} = toRefs(props)
const {Product, loading, Variants, Options, OptionValues,optionsUpdated,getVariant} = useProduct(props)
const {onResult} = useVariantByIndexQuery( {handle:'local',index:3})
onResult((value)=>{
  console.log("resu;tttt",value)
})
</script>
<template>
  <div class="product container">
    HIHIHHIz LOADING :<h2>{{ loading }}</h2>
    <div v-if="Product">
      {{Variants}}
      <div v-for="(option,index) in Options" :key="index">
        <h2>{{option.title}}</h2>
        <SimpleSelect @change="test()" :options="option.values"></SimpleSelect>
      </div>
    </div>
  </div>
</template>
