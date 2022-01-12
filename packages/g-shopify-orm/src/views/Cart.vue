<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cart-provider :id="78783" :mock="true" >

      <div slot-scope="{Mounted, ID, note,Items,Status,Token}">
        <h1 v-if="Mounted"> token {{Token}} id {{ID}}</h1>
        <div v-for="child, index in Items" :key="index">
          {{child}}

        </div>
      </div>
    </cart-provider>
    <!--    <DocProductProvider></DocProductProvider>-->

    <!--
         <gKabob path="divider.svg"
             width="100%"
             height="20"
             bg_color="red"
             color="yellow"
             :hr="true"/>
     -->

  </div>
</template>
<script>
import Vue from 'vue';
import PluginPatternlab from "@snailicide/g-patternlab"
Vue.use(PluginPatternlab)
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

//import cartData from "owool/src/assets/data/cart.json";
import CartProvider from "../components/dataProvider/CartProvider";
import ProductProvider from "../components/dataProvider/ProductProvider";
import ProductInstanceProvider from "../components/dataProvider/ProductInstanceProviderUniversal.vue";

export default {
  name: "CartView",
  components: {ProductInstanceProvider, ProductProvider, CartProvider},
  data: function () {
    return {group: false}
  },
  props: {}
}
</script>
