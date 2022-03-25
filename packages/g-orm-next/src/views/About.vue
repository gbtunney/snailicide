<script lang="ts" setup>
import {ref, watch, computed, Ref, defineComponent, onMounted} from 'vue';
import ProductProvider from './../components/newProductProvider.vue';

//defineComponent(ProductProvider)
const handle = ref(undefined)
//    <button @click="getNewProduct({handle:'local'})">local</button>
// <button @click="getNewProduct({handle:'balance'})">balance</button

</script>
<template>
  <div class="about">
    <button @click="handle='balance'"> Balance</button>
    <product-provider :handle="handle"/>
  </div>
</template>
