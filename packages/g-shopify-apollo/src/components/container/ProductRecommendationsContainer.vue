<script lang="ts" setup>
import {UseQueryOptions, useResult} from "@vue/apollo-composable";
import {ref, watch, computed, defineComponent, PropType, Ref} from 'vue';
import {defineProps, toRefs, withDefaults} from "vue";
import {getDigitCount, toInteger, isInteger,formatCurrency} from "@snailicide/g-library";
import {composeGid} from '@shopify/admin-graphql-api-utilities';
import {useProductRecommendationsQuery} from "./../../types/generated/storefront-types";
import {LoadingSpinner} from '@snailicide/g-patternlab';
import {ShopifyMediaURL} from "./../../scripts/shopify";

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

      asset_url?: string
      css_classes?:string
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

const getAssetURL =( path :string) => {
 if  (props.asset_url) return `${ ( props.asset_url ).split("?")[0] }/${path}`
  return path
}
const hasTag = (tags: string[], str: string, amount: number) => tags.find((tag) => (str === tag))

const {result, loading} = useProductRecommendationsQuery({id: productID.value})

const productQueryResult = useResult(result,null, ( data )=>{
  if ( data.productRecommendations ){
    return data.productRecommendations.slice(0,props.limit)
  }else{
    return []
  }

})

</script>
<template>
  <div>
    <div v-if="!loading">
      <slot name="loading">
        <loading-spinner fg="text-gray-200" bg="fill-blue-600"/>
      </slot>
    </div>
    <ul v-if="productQueryResult"
        :class="props.css_classes ? props.css_classes : ''"
        class="ProductRecommendationsContainer">
      <li v-for="(product,index) in productQueryResult" :key="index">
        <slot name="product" :product="product" :index="index">
          <div class="product-grid__card group box-border hover:border-solid border-1 p-4"
              border="accent-primary">
            <a class="product-grid__image_wrapper block relative" :href="product.onlineStoreUrl" :title="product.image.src">
              <div class="product-grid__image">
                <img class="object-contain h-auto w-full " :src="ShopifyMediaURL(product.image.src,500)" :alt="product.image.alt"/>
              </div>
              <div class="product-grid__price bg-white bg-opacity-80 p-2 absolute bottom-0 right-0 ">
               <span v-if="product.priceRange.minVariantPrice.amount === 0" >
                 FREE
               </span>
                <span v-else-if="product.priceRange.minVariantPrice.amount !== product.priceRange.maxVariantPrice.amount">
                  <small>from</small> {{ formatCurrency(product.priceRange.minVariantPrice.amount,2) }}
                </span>
                <span v-else>
                  {{ formatCurrency(product.priceRange.minVariantPrice.amount,2 )}}
                </span>
              </div>
              <div class="product-grid__badge_wrapper absolute w-1/3 bottom-40px right-0">
                <div class="product-grid__badge w-full">
                  <div class="product-grid__badge w-full">
                    <img v-if="hasTag(product.tags,'GLOBAL ORGANIC',product.priceRange.minVariantPrice.amount )" :src="getAssetURL('global_organic2.png' )" alt="todo: jocelyn fill me in"/>
                    <img v-else-if="hasTag(product.tags,'GOTS logo')" :src="getAssetURL('GOTS-logo.png')" alt="todo: jocelyn fill me in"/>
                    <img v-else-if="hasTag(product.tags,'GOTSCERES-029')" :src="getAssetURL('RGW-GOTS-logo-vert.png')" alt="todo: jocelyn fill me in"/>
                  </div>
                </div>
              </div>
            </a>

            <a class="product-grid__meta pt-1 hover-group:bg-green-500 block relative" :href="product.onlineStoreUrl">
              <h2 class="text-xl pt-2">{{ product.title }}</h2>
              <h5 class="font-sans text-sm text-accent-primary-dk sm-caps">{{ product.vendor }}</h5>
              <div class="absolute justify-end bottom-0 flex w-full">
             <g-icon class="text-accent-primary w-auto" :inline="true" :path="getAssetURL('vintage-arrow-2.svg')"/>
              </div>
            </a>
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>
