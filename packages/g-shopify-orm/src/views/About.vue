<template>
  <div class="about">
    <ProductProvider :handle="$data.handle" :variant_id="3" >
<div slot-scope="{Ready,
Product,Variants,SelectedVariant,UpdateOption,Options,OptionValueList,SelectedOptionValue,Images}">
      <div v-if="Ready">
        <ul v-for="(option,index) in Options" :key="index">
          <li v-text="option.title"></li>
          <li>{{OptionValueList(option.handle)}}</li>
        </ul>

      </div>
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
