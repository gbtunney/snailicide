<script lang="ts">
import {defineComponent, provide} from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import {useShopifyBuy} from "./../stores/ShopifyBuy"; // @ is an alias to /src
import {useStore} from 'vuex'
import {
  ref,
  onMounted,
  computed,
  watch,
  PropType,
  Ref,
  SetupContext,
  Prop,
  defineProps,
  defineEmits,
  withDefaults
} from 'vue';
import {Product, ProductVariant, ProductImage, ProductOption, ProductOptionValue} from "./../models";
import {useShopifyCheckout} from "./../stores/ShopifyCheckout";
import {Icon} from '@iconify/vue';
// @ts-expect-error dxds
import mockdata from './../stores/mockdata.json'
import gIconify from './../components/gIconify.vue';
import {
  useProductByHandleQuery,
  ProductByHandleQuery,
  ProductByHandleQueryVariables
} from './../graphql/types/generated-types'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld, Icon, gIconify
  },
  setup() {
    const store = useStore()
    const shopify = useShopifyBuy()
    const {client} = shopify
    // const checkout = useShopifyCheckout()
    const ProductRepo = computed(() => store.$repo(Product))
    const VARIANTRepo = computed(() => store.$repo(ProductVariant))
    const ImageRepo = computed(() => store.$repo(ProductImage))
    const ProductOptionRepo = computed(() => store.$repo(ProductOptionValue))

    /* const {result, loading, error} = useProductByHandleQuery({
       handle: "local"
     });*/
   // const parsed = parseData(mockdata)
    // console.log(" test_query :::::", result, loading, error)
  //  const resp = ProductRepo.value.save(parsed)
    /*  console.log("!!!!imaggges", ProductOptionRepo.value.query().withAll().get(), VARIANTRepo.value.query().withAllRecursive(2).get())
      //this isnt really used anymore since appollo client but probably will have to be for checkout.
      shopify.buildClient({
        domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
      })*/
    return {
      client,
      ProductRepo,
      all: ProductRepo.value.all(),
      // cart: checkout.getCart(),
    }
  }
});
</script>
<template>
  <div class="home">
    <hr>
    <button @click="anotherQ()" class="border-red-600">g Test button!!</button>
    <gIconify color="text-blue-500" style="height:1em;width:auto;"/>
    ico:<span class="iconify-inline" style="color: red" data-icon="fa-solid:home"></span>
    <div class="hi text-3xl "> client:
      <span class="bg-yellow-200 text-red-600 w-1/6" style="width:60px;"><Icon icon="mdi-light:home" class="w-full h-full iconify-inline inline"/></span>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>
