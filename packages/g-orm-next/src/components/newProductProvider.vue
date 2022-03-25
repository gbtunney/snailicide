<template>
  <div class="newProductProvider">
productttt
  </div>
</template>
<script lang="ts" setup>
import {Component, defineComponent, withDefaults, computed, defineProps, watch,defineEmits, Ref, ref, ComputedRef} from "vue";
import {useProduct,useProductLoader} from './../composable/product';
const props = withDefaults(
    defineProps<{
      handle?: string,
      variant_id?: string | number
    }>(), {
      handle: undefined,
      variant_id: 1
    })

watch(props,(value)=>{
  console.warn("watch :value",value)
})

const loader = useProductLoader(props)
//const Product = useProduct(props)
</script>
