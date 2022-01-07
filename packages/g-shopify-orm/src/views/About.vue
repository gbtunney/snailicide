<template>
  <div class="about">
    <ProductProvider :handle="$data.handle" :variant_id="22589282975862" >
<div               slot-scope="{Ready,Quantity , addToCart, QuantityAvailable,loadTest,Product,Variants,SelectedVariant,UpdateOption,Options,OptionValueList,SelectedOptionValue,UpdateInstance,Images,Instance,UpdateVariant}">
</div>
    </ProductProvider>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
///import DefaultProductPage from "../components/DefaultProductPage.vue";
import {Product} from "../orm/models"
import ProductProvider from './../components/dataProvider/ProductProvider.vue';

export default {
  name: "About",
  components: {ProductProvider},
  data: function () {
    return {
      handle:false
    }
  },
  props: {},
  async mounted(){

   const resp =  await Product.api().fetchByHandle("local")
    this.$data.handle = "local"
    console.log("response!", resp)
  }
}
</script>
