<template>
  <div>
    PRODUCT PROVIDER!!!
    <div class="ProductProvider" v-if="Product">
      {{ Product }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Component, defineComponent,withDefaults, computed, defineEmits, Ref, ref, ComputedRef} from "vue";
import {ProductProps,useProduct} from './../composable/useProduct';
/*
const props = withDefaults(defineProps<ProductProps>(), {
  handle: 'local',
  variant_id:1
})*/
const Product = false
//const {Product} = useProduct( props )
</script>
