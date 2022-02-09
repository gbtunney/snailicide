<template>
  <div class="Empty">
    <h1>Emoty</h1>
    <v-select
        :value="$data.product"
        :options="$data.products"
        label="title"
        :clearable=false
        @option:selecting="UpdateGroup">
    </v-select>
    <ProductProvider  :handle="$data.product.handle">
      <div slot-scope="{Product,SelectedVariant,Variants}">
       <div v-if="Product" >
          {{Product.title }} -- {{SelectedVariant.title}}

         <v-select autocomplete="on"
            v-if="Variants"
            :value="SelectedVariant"
            :options="Variants"
            label="title"
            :clearable=false
            @option:selecting="UpdateVariant">
        </v-select>
         </div>
      </div>
    </ProductProvider>

  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import {Product } from "./../orm/models"
import ProductProvider from '../orm/components/ProductProvider.vue';

export default {
  name: "Empty",
  components: {ProductProvider},
  data: function () {
    return {
      products:[],
      product: false
    }
  },methods:{
    UpdateGroup(product){
      console.log("--------------UpdateGroup-thhe store is!!!", product)
        this.$data.product = product
    },
    UpdateVariant(variant){
      console.log("--------------UpdateVariant-thhe store is!!!", variant)

    }
  },
 async  mounted(){
   // const result = await this.$store.set("global/asset_url","i am gilllilililililil")
    const result =await Product.api().fetchAll();
   this.$data.products =await Product.query().all();


   console.log("---------------thhe store is!!!", result)

  },
  props: {}
}
</script>
