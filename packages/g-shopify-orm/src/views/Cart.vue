<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <buy-cart-provider>
      <div slot-scope="{ Items,ItemCount,cartIsUpdating,updateItemQuantity}">
        <h1 v-if="cartIsUpdating">loading!!!</h1>
        <div v-if="!cartIsUpdating">
          <h2>CART COUNT{{ItemCount}}</h2>
          <div v-for="(child, index) in Items" :key="index">
            <product-instance v-bind="child">
              <div slot-scope="{Product,SelectedVariant,Variants,SelectedVariantImage,Quantity,UpdateInstance,Instance}">
                &lt;!&ndash;        <div slot-scope="{Ready, Product,SelectedVariant,UpdateInstance,RequestedQuantity,Instance,SelectedVariantImage}">&ndash;&gt;
                <img v-if='SelectedVariantImage' :src="SelectedVariantImage.getSrc(100)"/>
                <div class="flex" v-if="Product && SelectedVariant">
                  {{ Product.title }} &#45;&#45; {{ SelectedVariant.title }}
                  <SfQuantitySelector :qty="Quantity" :min="0"
                      :max="SelectedVariant.inventory_quantity"
                      @input="updateItemQuantity({  pid: child.pid,quantity: $event}) "/>
                  <button class="bg-accent-secondary" @click="Instance.$delete( );updateItemQuantity({  pid: child.pid,quantity: 0}) ">X</button>
                </div>
              </div>
            </product-instance>
          </div>
        </div>
      </div>
    </buy-cart-provider>-->
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

import { ProductProvider } from "@snailicide/g-shopify-orm";
Vue.component("product-provider", ProductProvider);

import { ProductInstanceProvider } from "@snailicide/g-shopify-orm";
Vue.component("product-instance", ProductInstanceProvider);

import { BuyCartProvider } from "@snailicide/g-shopify-orm";
Vue.component("buy-cart-provider", BuyCartProvider);



export default {
  name: "CartView",
  components: {},
  data: function () {
    return {group: false}
  },
  props: {}
}
</script>
