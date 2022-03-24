<script lang="ts" setup>
import {ref, watch, computed, Ref,defineComponent,onMounted} from 'vue';
import ProductProvider from './../components/ProductProvider.vue';
import HelloWorld from './../components/newProductProvider.vue';

//defineComponent(HelloWorld)

const handle = ref('balance')
//    <button @click="getNewProduct({handle:'local'})">local</button>
   // <button @click="getNewProduct({handle:'balance'})">balance</button
onMounted(()=>{
  console.log("MOUNTED@",ProductProvider )

})
//const product_provider = defineComponent( ProductProvider)
</script>
<template>
  <div class="about" >
<hello-world/>
  </div>
</template>
