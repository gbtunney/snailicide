<script lang="ts" setup>
import {Component,toRefs, defineComponent, withDefaults, computed, defineProps, watch,defineEmits, Ref, ref, ComputedRef} from "vue";
import {useProductByHandleLoader} from './../../operations/queries/useProductByHandleLoader';
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

watch(props,(value)=>{
  console.warn("watch :value",value)
})
const {handle}= toRefs(props)
const {product} = useProductByHandleLoader(props)
//const Product = useProduct(props)
</script>
<template>
  <div class="product container" v-if="product">
    <h1>I am the product container {{handle}}{{product}}</h1>
  </div>
</template>
