<template>
  <div class="about">
    <ProductProvider :handle="$data.handle" :variant_id="$data.variant_id">
      <div slot-scope="{Ready,
Product,Variants,SelectedVariant,UpdateOption,Options,OptionValueList,SelectedOptionValue,Images}">
        <div v-if="Ready">
          <div v-if="SelectedVariant">
            <v-select autocomplete="on"
                v-if="Variants"
                :value="SelectedVariant"
                :options="Variants"
                label="title"
                :clearable=false
                @option:selecting="updateVariant"


            >
              <template #option="{ isSelected,title,$isDisabled ,image }">

                <div :class="isSelected? 'bg-primary-lt' : '' "
                    class="flex font-secondary uppercase items-center text-lg flex-row h-full w-full p-2.5">
                  <div v-if="image"
                      class="sf-product-option__color">
                    <img v-if='image' :src="image.src" class="object-cover"/>
                  </div>
                  <span :class="isSelected? 'font-bold' : '' ">{{ title }}</span>
                </div>
              </template>
              <template #selected-option-container="{ option, deselect, multiple, disabled }">
                <div class="vs__selected">
                  <span v-if="option.Product">{{ option }}</span>
                  <span>{{ option.title }}</span>
                </div>
              </template>
            </v-select>

            <!--
                      <input type="number" :qty="Quantity" :min="0"
                          :max="SelectedVariant.inventory_quantity"
                          @input="UpdateInstance({ quantity: $event},Instance)"/>
                      <h5 v-if="SelectedVariant">available units: {{ QuantityAvailable }}</h5>
                      <h6 class="text-red-700 font-style-primary" v-if="QuantityAvailable <= 5">less than 5 available units: {{ QuantityAvailable }}</h6>
            -->
          </div>
        </div>
      </div>
    </ProductProvider>
    <h1>This is an about page</h1>
  </div>
</template>
<script>import Vue from "vue";
///import DefaultProductPage from "../components/DefaultProductPage.vue";
import {Product} from "../orm/models"
import ProductProvider from './../components/dataProvider/ProductProvider.vue';
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

export default {
  name: "About",
  components: {ProductProvider},
  data: function () {
    return {
      handle: false,
      variant_id: 4
    }
  },
  props: {},
  methods: {
    updateVariant(variant = {}) {  //TODO: change this name - i hate it.
      console.log("variant update  ::: Called", variant)
      this.$data.variant_id = variant.id
    },
  },
  async mounted() {
    const resp = await Product.api().fetchByHandle("local")
    this.$data.handle = "local"
    console.log("response!", resp)
  }
}
</script>
