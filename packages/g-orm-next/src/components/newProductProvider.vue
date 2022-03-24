<template>
  <div class="newProductProvider" v-if="Product">
    I AM A TEST COMPONENT@@@ {{ message }} ::::{{ props.handle }} ::::{{ Product }}
  </div>
</template>
<script lang="ts" setup>
const message = "i am setttttup here"
import {Component, defineComponent, withDefaults, computed, defineProps, defineEmits, Ref, ref, ComputedRef} from "vue";
import {useProduct} from './../composable/product';

const props = withDefaults(
    defineProps<{
      handle?: string,
      variant_id?: string | number
    }>(), {
      handle: undefined,
      variant_id: 1
    })

const Product = useProduct(props)

</script>
