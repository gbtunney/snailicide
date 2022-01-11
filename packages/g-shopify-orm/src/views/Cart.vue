<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cart-provider :id="43993" v-bind="$data.group">

      <div slot-scope="{Mounted, ID, note,Items,Status,Token}">
        <h1 v-if="Mounted"> token {{Token}} id {{ID}}</h1>
        <div v-for="child, index in Items" :key="index">
          <ProductInstanceProvider v-bind="child.$toJson()">
            <div slot-scope="{Testing,Instance,ID,UpdateVariant,Quantity,QuantityAvailable,AddToCart,Product,SelectedVariant,Variants,SelectedVariantImage}">
             ------ {{Testing}} {{Product.title}}
<!--              <ProductProvider v-bind="Instance.$toJson()">
                <div slot-scope="{Product,SelectedVariant,Variants,SelectedVariantImage}">
                  &lt;!&ndash;        <div slot-scope="{Ready, Product,SelectedVariant,UpdateInstance,RequestedQuantity,Instance,SelectedVariantImage}">&ndash;&gt;
                  <div v-if="child">child:{{ child.handle }}-</div>
                  <img v-if='SelectedVariantImage' :src="SelectedVariantImage.getSrc(200)"/>
                  <div class="flex" v-if="Product && SelectedVariant">
                    {{ Product.title }} &#45;&#45; {{ SelectedVariant.title }}
                    <input type="number" :value="Quantity" :min="0"
                        :max="SelectedVariant.quantity"
                        @input="UpdateInstance({ quantity: $event},Instance)"/>
                    <button class="bg-accent-secondary" @click="Instance.$delete()">REMOVE ME</button>
                  </div>
                </div>
              </ProductProvider>-->
            </div>
          </ProductInstanceProvider>
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
