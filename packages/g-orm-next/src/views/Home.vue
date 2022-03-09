<template>
  <div class="home">
    cart: {{ cart }}
    <hr>
    value : {{ mytest }}
    client: {{ ProductRepo.all() }}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, provide} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {useShopifyBuy} from "./../stores/ShopifyBuy"; // @ is an alias to /src
import {useStore} from 'vuex'
import {ref, onMounted, computed, PropType, Ref, SetupContext, Prop, defineProps, defineEmits, withDefaults} from 'vue';
import {Product} from "./../models/Product";
import {useShopifyCheckout} from "./../stores/ShopifyCheckout";

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore()
    const shopify = useShopifyBuy()
    const {client} = shopify
    const checkout = useShopifyCheckout()
    const ProductRepo = computed(() => store.$repo(Product))
    const test_query = shopify.getProductByHandle("local")
    console.log("the test_query :::::", test_query)

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
