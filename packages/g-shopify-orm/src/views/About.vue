<template>
  <div class="about">
    <DefaultProductPage handle="local" >
<div               slot-scope="{Ready,Quantity , addToCart, QuantityAvailable,loadTest,Product,Variants,SelectedVariant,UpdateOption,Options,OptionValueList,SelectedOptionValue,UpdateInstance,Images,Instance,UpdateVariant}">
</div>
    </DefaultProductPage>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import DefaultProductPage from "../components/DefaultProductPage.vue";
import {Product} from "../orm/models"
export default {
  name: "About",
  components: {DefaultProductPage},
  data: function () {
    return {
      handle:false
    }
  },
  props: {},
  async mounted(){
   const resp =  await Product.api().fetchByHandle("local")
    console.log("response!", resp)
  }
}
</script>
