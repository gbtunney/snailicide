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

watch(props, (value) => {
  console.warn("watch :value", value)
})
const {handle} = toRefs(props)
const {Product, loading, Variants, Options, OptionValues} = useProduct(props)
</script>
<template>
  <div class="product container">
    HIHIHHIz LOADING :<h2>{{ loading }}</h2>
    <div v-if="Product">
      <h1>I am the product container {{ handle }}{{ Options }}</h1>
    </div>
  </div>
</template>
