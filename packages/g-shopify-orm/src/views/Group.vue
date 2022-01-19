<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <product-group-provider :id="43993" v-bind="$data.group">
      <div slot-scope="{ ID, note,Items,Status}">
        <div v-for="child, index in Items" :key="index">
          <ProductInstanceProvider v-bind="child.$toJson()">
            <div slot-scope="{Instance,ID,UpdateVariant,Quantity,QuantityAvailable,AddToCart}">
              <ProductProvider v-bind="Instance.$toJson()">
                <div slot-scope="{Product,SelectedVariant,Variants,SelectedVariantImage}">
                  <!--        <div slot-scope="{Ready, Product,SelectedVariant,UpdateInstance,RequestedQuantity,Instance,SelectedVariantImage}">-->
                  <div v-if="child">child:{{ child.handle }}-</div>
                  <img v-if='SelectedVariantImage' :src="SelectedVariantImage.getSrc(200)"/>
                  <div class="flex" v-if="Product && SelectedVariant">
                    {{ Product.title }} -- {{ SelectedVariant.title }}
                    <input type="number" :value="Quantity" :min="0"
                        :max="SelectedVariant.quantity"
                        @input="UpdateInstance({ quantity: $event},Instance)"/>
                    <button class="bg-accent-secondary" @click="Instance.$delete()">REMOVE ME</button>
                  </div>
                </div>
              </ProductProvider>
            </div>
          </ProductInstanceProvider>
        </div>
      </div>
    </product-group-provider>
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

import cartData from "owool/src/assets/data/cart.json";
import ProductInstanceProvider from "../orm/components/ProductInstanceProvider";
import ProductProvider from "../orm/components/ProductProvider";
import ProductGroupProvider from "../orm/components/ProductGroupProvider";

export default {
  name: "Group",
  components: {ProductInstanceProvider, ProductProvider, ProductGroupProvider},
  data: function () {
    return {group: cartData}
  },
  props: {}
}
</script>
