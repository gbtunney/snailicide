<template>
  <div class="home">
    cart: {{ cart }}
    <hr>
<gIconify color="text-blue-500" style="height:1em;width:auto;">

</gIconify>
    ico:<span class="iconify-inline" style="color: red" data-icon="fa-solid:home"></span>
   <div class="hi text-3xl "> client: {{ ProductRepo.all() }}
     <span  class="bg-yellow-200 text-red-600 w-1/6" style="width:60px;"><Icon icon="mdi-light:home"  class="w-full h-full iconify-inline inline"/></span>
   </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, provide} from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import {parseData, useShopifyBuy} from "./../stores/ShopifyBuy"; // @ is an alias to /src
import {useStore} from 'vuex'
import {ref, onMounted, computed, PropType, Ref, SetupContext, Prop, defineProps, defineEmits, withDefaults} from 'vue';
import {Product} from "./../models/Product";
import {ProductVariant} from "./../models/ProductVariant";
import {useShopifyCheckout} from "./../stores/ShopifyCheckout";
import { Icon } from '@iconify/vue';
// @ts-expect-error dxds
import mockdata from './../stores/mockdata.json'
import  gIconify from './../components/gIconify.vue';
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,Icon,gIconify
  },
  setup() {
    const store = useStore()
    const shopify = useShopifyBuy()
    const {client} = shopify
    const checkout = useShopifyCheckout()
    const ProductRepo = computed(() => store.$repo(Product))
    const VARIANTRepo = computed(() => store.$repo(ProductVariant))

    const test_query = shopify.getProductByHandle("local")


    const parsed = parseData(mockdata)
    console.log("the test_query :::::", test_query,parsed)


    ProductRepo.value.save(parsed)

    console.log("imaggges" ,VARIANTRepo.value.query().withAll().all())
    //this isnt really used anymore since appollo client but probably will have to be for checkout.
    shopify.buildClient({
      domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
      storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
    })
    return {
      client,
      test_query,
      ProductRepo,
      all: ProductRepo.value.all(),
      checkout,
      cart: checkout.getCart()
    }
  }
});
</script>
