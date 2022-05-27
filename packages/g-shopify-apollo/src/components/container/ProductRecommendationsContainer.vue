<script lang="ts" setup>
import {UseQueryOptions, useResult} from "@vue/apollo-composable";
import {ref, watch, computed, defineComponent, PropType, Ref} from 'vue';
import {defineProps, toRefs, withDefaults} from "vue";
import {getDigitCount, toInteger, isInteger} from "@snailicide/g-library";
import {composeGid} from '@shopify/admin-graphql-api-utilities';
import {useProductRecommendationsQuery} from "./../../types/generated/storefront-types";
import {LoadingSpinner} from '@snailicide/g-patternlab';

/* * PROPS * */
const props = withDefaults(
    defineProps<{
      /**
       * Product ID
       */
      product_id: string,
      /**
       * Limit
       */
      limit?: number

    }>(), {limit: 4})

const {product_id} = toRefs(props)

watch(product_id, (value) => {
  console.log("THE PRODUCTID IS VALUE", value)
})

const productID = computed(() => {
  if (isInteger(product_id.value)) {
    // SID ::: then Compose GID, cast back to string
    const sid = toInteger(product_id.value) as number
    if (getDigitCount(sid) >= 9) {
      console.log("productID", productID)
      return btoa(composeGid("Product", sid) as string)
    }
    // Position OR index :::: RETURN Variant
    //if (this.getVariantByIndex(index)) return this.getVariantByIndex(index)
  }
  return product_id.value
})

const {result, loading} = useProductRecommendationsQuery({id: productID.value})

const productQueryResult = useResult(result,/*null, data => data.users*/)

</script>
<template>
  <div>
    <div v-if="!loading">
      <slot name="loading">
        <loading-spinner/>
      </slot>
    </div>
    <ul v-if="productQueryResult" class="ProductRecommendationsContainer">
      <li v-for="(product,index) in productQueryResult" :key="index">
        <slot :product="product" :index="index"></slot>
        <h2>{{ product.title }}</h2>
      </li>
    </ul>
  </div>
</template>
