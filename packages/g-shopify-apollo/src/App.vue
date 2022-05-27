<template>
  <div class="bg-black text-white w-full h-full block children:m-2">
    ENTRY POINT!
    <button @click="handle='balance'"> Balance</button> |
    <button @click="handle='local'"> local</button> |
    <button @click="handle='o-wash-fingering'"> o-wash-fingering</button> |
    <button @click="handle=undefined"> SET TO UNDEFINED!!</button>
    <product-container :handle="handle"></product-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ProductContainer from "./components/container/ProductContainer.vue"
import {useProductByHandleCustomQuery} from "@/types/generated/storefront-types";

export default defineComponent({
  name: 'App',
  components: {
    ProductContainer
  },
  data: () => {
    return {
      handle: ''
    }
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
