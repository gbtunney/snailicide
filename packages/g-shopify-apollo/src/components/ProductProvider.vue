<template>
  <div class="newProductProvider">
    productttt
  </div>
</template>
<script lang="ts" setup>
import {Component,toRefs, defineComponent, withDefaults, computed, defineProps, watch,defineEmits, Ref, ref, ComputedRef} from "vue";
import {useProductByHandleLoader as useProductLoader} from './../operations/queries/useProductByHandleLoader';
const props = withDefaults(
    defineProps<{
      handle?: string,
      variant_id?: string | number
    }>(), {
      handle: 'local',
      variant_id: 1
    })

watch(props,(value)=>{
  console.warn("watch :value",value)
})
const {handle}= toRefs(props)
const loader = useProductLoader(props)
console.log("ffff",loader)

//const Product = useProduct(props)
</script>
