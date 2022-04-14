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
import {useVariantByIndexQuery,useTestproductopQuery,VariantByIndexDocument} from "@/types/generated/storefront-types";
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
      variant_id: '5'//99//'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjU4OTI4MzEwNjkzNA=='// '22620513665142'

})
//defineComponent(SimpleSelect)
watch(props, (value) => {
  //console.warn("watch :value", value)
})

//const {result,onResult,error,query,onError} = useVariantByIndexQuery({handle:'local',index:7})
//console.warn("useTestproductopQuery :value", result,error)

//onResult((value)=>{
 // console.warn("onResult :value", value)

//})

const {handle,variant_id} = toRefs(props)
const {Product, loading, Variants, Options, OptionValues,optionsUpdated,getVariant,getVariantByIndex} = useProduct(props)

</script>
<template>
  <div class="product container">
    HIHIHHIz LOADING :<h2>{{ loading }}</h2>
    <div v-if="Product">
      {{Product }}
      <div v-for="(option,index) in Options" :key="index">
        <h2>{{option.title}}</h2>
        <SimpleSelect @change="test()" :options="option.values"></SimpleSelect>
      </div>
    </div>
  </div>
</template>
