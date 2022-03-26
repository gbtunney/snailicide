<script lang="ts" setup>
import {ref, watch, computed, Ref, defineComponent, onMounted} from 'vue';
import ProductProvider from './../components/newProductProvider.vue';
//defineComponent(ProductProvider)
const handle = ref('balance')
//    <button @click="getNewProduct({handle:'local'})">local</button>
// <button @click="getNewProduct({handle:'balance'})">balance</button

</script>
<template>
  <div class="about">
    <button @click="handle='balance'"> Balance</button>
    <button @click="handle='local'"> local</button>
    <button @click="handle='o-wash-fingering'"> o-wash-fingering</button>

    <button @click="handle=undefined"> SET TO UNDEFINED!!</button>


    <product-provider :handle="handle"/>
  </div>
</template>
