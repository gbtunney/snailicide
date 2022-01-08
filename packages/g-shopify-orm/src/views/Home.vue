<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!--    <DocProductProvider></DocProductProvider>-->
    <ProductInstanceProvider   :id="999999" :handle="'local'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="10">
      <div slot-scope="{Instance,ID,UpdateVariant,Variants}">

        <ProductProvider v-bind="Instance.$toJson()">
          <div slot-scope="{Product,SelectedVariant,Variants}">
           {{ID}} {{Product.title }} -- {{SelectedVariant.title}}
            <v-select autocomplete="on"
                v-if="Variants"
                :value="SelectedVariant"
                :options="Variants"
                label="title"
                :clearable=false
                @option:selecting="UpdateVariant"


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
            <button>Add to Cart</button>
          </div>

        </ProductProvider>
      </div>
    </ProductInstanceProvider>

    <ProductInstanceProvider   :id="99992299" :handle="'balance'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="2">
      <div slot-scope="{Instance,ID,UpdateVariant,Variants}">

        <ProductProvider v-bind="Instance.$toJson()">
          <div slot-scope="{Product,SelectedVariant,Variants}">
            {{ID}} {{Product.title }} -- {{SelectedVariant.title}}
            <v-select autocomplete="on"
                v-if="Variants"
                :value="SelectedVariant"
                :options="Variants"
                label="title"
                :clearable=false
                @option:selecting="UpdateVariant"


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
            <button>Add to Cart</button>
          </div>

        </ProductProvider>
      </div>
    </ProductInstanceProvider>

    <ProductInstanceProvider   :id="99945999" :handle="'local'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="10">
      <div slot-scope="{Instance,ID,UpdateVariant,Variants}">

        <ProductProvider v-bind="Instance.$toJson()">
          <div slot-scope="{Product,SelectedVariant,Variants}">
            {{ID}} {{Product.title }} -- {{SelectedVariant.title}}
            <v-select autocomplete="on"
                v-if="Variants"
                :value="SelectedVariant"
                :options="Variants"
                label="title"
                :clearable=false
                @option:selecting="UpdateVariant"


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
            <button>Add to Cart</button>
          </div>

        </ProductProvider>
      </div>
    </ProductInstanceProvider>

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
import ProductProvider from './../components/dataProvider/ProductProvider.vue';
import ProductInstanceProvider from './../components/dataProvider/ProductInstanceProvider.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    ProductInstanceProvider,ProductProvider
  },
});
</script>
