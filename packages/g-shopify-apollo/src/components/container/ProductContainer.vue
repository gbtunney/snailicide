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
      handle: 'local',
      variant_id: 1
    })

watch(props,(value)=>{
  console.warn("watch :value",value)
})
const {handle}= toRefs(props)
const loader = useProductByHandleLoader(props)
//const Product = useProduct(props)
</script>
<template>
  <div class="product container">
    <h1>I am the product container {{handle}}</h1>
  </div>
</template>
