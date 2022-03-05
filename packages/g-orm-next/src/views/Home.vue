<template>
  <div class="home">
    client: {{ ProductRepo.all() }}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {useShopifyBuy} from "./../stores/ShopifyBuy"; // @ is an alias to /src
import {useStore} from 'vuex'
import {ref, onMounted, computed, PropType, Ref, SetupContext, Prop, defineProps, defineEmits, withDefaults} from 'vue';
import {Product} from "./../models/Product";

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore()
    const shopify = useShopifyBuy()
    const {client} = shopify
    const ProductRepo = computed(() => store.$repo(Product))

    if (shopify.client) {
      const productResource = shopify.client.product
      const _product = productResource.fetchByHandle('local').then((result) => {
        console.log("the product is!!", result)
        ProductRepo.value.save(result)
      })
    }
    return {
      client,
      ProductRepo,
      all: ProductRepo.value.all()
    }
  }
});
</script>
