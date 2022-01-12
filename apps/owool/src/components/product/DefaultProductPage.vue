<template>
  <div>
    <buy-cart-provider @ready="cartReady">
      <div slot-scope="{ Items,ItemCount,cartIsUpdating,updateItemQuantity}">
        <h1>loading {{cartIsUpdating}}</h1>
        <div v-for="(child, index) in Items" :key="index">
          <product-instance v-bind="child">
            <div slot-scope="{Product,SelectedVariant,Variants,SelectedVariantImage,Quantity,UpdateInstance,Instance}">
              <!--        <div slot-scope="{Ready, Product,SelectedVariant,UpdateInstance,RequestedQuantity,Instance,SelectedVariantImage}">-->
              <div v-if="child">child:{{ child.handle }}-</div>
              <img v-if='SelectedVariantImage' :src="SelectedVariantImage.getSrc(200)"/>
              <div class="flex" v-if="Product && SelectedVariant">
                {{ Product.title }} -- {{ SelectedVariant.title }}
                <input type="number" :value="Quantity" :min="0"
                    :max="SelectedVariant.quantity"
                    @input="updateItemQuantity({ quantity: $event.target.value},Instance)"/>
                <button class="bg-accent-secondary" @click="Instance.$delete()">REMOVE ME</button>
              </div>
            </div>
          </product-instance>
          </div>
      </div>
    </buy-cart-provider>
    <product-instance :handle="$props.handle" :variant_id="Variant">
      <div slot-scope="{Ready,Instance,Quantity,QuantityAvailable,AddToCart,UpdateVariant,UpdateInstance,UpdateOption}">
        <product-provider v-if="Instance" v-bind="Instance.$toJson()">
          <brooklyn-product-template id="shopify-section-product-template"
              slot-scope="{Ready ,Loading,SelectedVariantImage,Product,Variants,SelectedVariant,Options,OptionValueList,SelectedOptionValue,Images}">
            <template #left-column>
              <h1 v-if="Loading">loading!!</h1>
              <img v-if="SelectedVariant"
                  :src="SelectedVariantImage.getSrc(400)"
                  :alt="SelectedVariantImage.title"
                  class="object-cover hover:cursor-pointer">
              <ProductImageGrid
                  :columnCount="8" @changed="imageChanged($event, false , UpdateOption) "
                  option-handle="color"
                  :images="Images">
              </ProductImageGrid>
            </template>
            <template #right-column>
              <h1 class="font-style-primary text-3xl" v-if="Product">{{ Product.title }}</h1>
              <div
                  v-for="(productOption,index) in Options" v-bind:key="index"
                  class="product-option-wrapper m-8">
                <v-select autocomplete="on"
                    v-if="OptionValueList(productOption)"
                    @option:selecting="UpdateOption"
                    :value="SelectedOptionValue(productOption)"
                    :options="OptionValueList(productOption)"
                    label="title"
                    :autoscroll=true
                    :clearable=false>
                  <template #option="{title,thumbnail,isSelected,image,$isDisabled,hex_color,parent_handle} ">
                    <!-- class="flex font-secondary uppercase items-center text-lg flex-row h-full w-full p-2.5"-->
                    <div :class="[
                        { 'is_selected': isSelected },
                        {'is_disabled': $isDisabled}]"
                        class="product_option ">
                <span v-if="false" v-bind:style="{ background:hex_color }" style="height: 1.5em; width:auto;aspect-ratio: 1; " :class="(parent_handle != 'color')?'hidden':''" class=" border border-primary-dk  mr-8 ">
                            <img v-if='thumbnail' :src="thumbnail.getSrc(150)"/>
                  </span>
                      <span v-if="title"
                          :class="(parent_handle !== 'color')?'hidden':''"

                          class="g-svg h-full mr-8 ">
<!--                               <inline-svg src="/svg/leaves-a.svg"/>-->
                      </span>

                      <span
                          v-if="title"
                          :class="isSelected? 'font-bold text-white' : '' "
                          class="font-style-sm-caps ">
                        {{ title }}
                      </span>
                    </div>
                  </template>
                  <template #selected-option="{title }">
                    <div class="selected-option font-style-sm-caps tracking-wider">
                      <span class="font-bold">{{ productOption.title }}</span> : <span>{{ title }}</span>
                    </div>
                  </template>
                </v-select>
              </div>
              <div v-if="SelectedVariant">
                <v-select autocomplete="on"
                    v-if="Variants"
                    :value="SelectedVariant"
                    @option:selecting="UpdateVariant"
                    :options="Variants"
                    label="title"
                    :clearable=false
                >
                  <template #option="{ isSelected,title,$isDisabled ,image }">

                    <div :class="isSelected? 'bg-primary-lt' : '' "
                        class="flex font-secondary uppercase items-center tTotalPriceext-lg flex-row h-full w-full p-2.5">

                      <div v-if="image"
                          class="sf-product-option__color">
                        <img v-if='image' :src="image.src" class="object-cover"/>
                      </div>

                      <span :class="isSelected? 'font-bold' : '' ">{{ title }} </span>
                    </div>
                  </template>
                  <template #selected-option-container="{ option, deselect, multiple, disabled }">
                    <div class="vs__selected">
                      <span v-if="option.Product">{{ option }} / </span>
                      <span>{{ option.title }}</span>
                    </div>
                  </template>
                </v-select>
                <SfQuantitySelector :qty="Quantity" :min="0"
                    :max="SelectedVariant.inventory_quantity"
                    @input="UpdateInstance({ quantity: $event},Instance)"/>
                <h5 class=" font-style-primary" v-if="SelectedVariant">available units: {{ QuantityAvailable }}</h5>
                <h6 class="text-red-700 font-style-primary" v-if="QuantityAvailable <= 5">less than 5 available units: {{ QuantityAvailable }}</h6>

                <button v-if="Instance"
                    class="bg-accent-primary-dk text-light font-style-sm-caps text-2xl px-4 py-2 "
                    @click="AddToCart(Instance)"
                >Add to Cart &#8226; id {{ Instance.id }}
                </button>
              </div>
            </template>
          </brooklyn-product-template>
        </product-provider>
      </div>
    </product-instance>
  </div>

</template>
<script>
import VueRouter from "vue-router";
import BrooklynProductTemplate from './BrooklynProductTemplate.vue'
import {
  SfGallery, SfQuantitySelector
} from "@storefront-ui/vue";
import ProductImageGrid from './../images/ProductImageGrid.vue'

export default {
  name: "NewDefaultProductPage",

  components: {BrooklynProductTemplate, ProductImageGrid, SfQuantitySelector},
  data: function () {
    return {}
  },
  props: {
    handle: {
      type: [Boolean, String],  /* ID OR SID */
      default: false,
    },
  },
  watch: {
    handle: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(" handle changed from " + oldValue + " to " + newValue)
      }
    }
  },
  computed: {
CartState(){
  return   ( this.$store.get('shopifycart/cart')&&this.$store.get('shopifycart/cart').lineItems ) ? this.$store.get('shopifycart/cart').lineItems.length:false;
},
    Variant: function () {
      return (this.$route.query && this.$route.query.variant) ? parseInt(this.$route.query.variant) : 1;
    }
  },
  methods: {
    cartReady(){
      console.log("imshrrr")

    },
    getSrcSet(_images = []) {
      if (!_images) return
      return _images.map(function (image) {
        console.log("imshrrr", image)
        return image.srcset;
      })
    },
    imageChanged(imageObj, slide_func, update_option_func) {
      console.log("--------------------image changed", imageObj);

      const {image, linked_option} = imageObj;
      if (!image) return
      console.log("--------------------image changed", this);
      if (update_option_func && linked_option) update_option_func(linked_option);
      if (slide_func) slide_func(image.position - 1)
    },
    setCallback(_func) {
      ///THIS IS A HACK
      console.log("--------------------func changed", _func);
      this.$data.glide = _func
    },
    variantChanged(_variant) {
      console.log("--------------------variant changed", _variant);
    }
  }
}
</script>

<style lang="postcss" type="text/css" scoped>
.g-svg >>> path, .g-svg >>> rect, .g-svg >>> g, .g-svg >>> circle {
  fill: var(--fill-color);
}
</style>
<style lang="scss" type="text/css" scoped>
@import "./../../styles/scss/gMixins";

.is_selected {
  @include includeTailwindStyles(bg-primary-dk text-white);
}

.vs__dropdown-option--highlight .is_selected {
  @include includeTailwindStyles(opacity-80 cursor-default);
}

.is_disabled {
  @include includeTailwindStyles(bg-light-lt text-black cursor-default opacity-40);
}
</style>
<style lang="scss" type="text/scss">

@import "./../../styles/scss/gMixins";

.sf-gallery {
  --gallery-flex-direction: column;
  flex-direction: column-reverse;
  --gallery-thumbs-flex: 0;
}


.vs__dropdown-option {
  margin: 0;
  padding: 0;
}

.selected-option {
  $base-list: pr-5 pl-5 pt-1 pb-1 text-xl;
  @include includeTailwindStyles($base-list);
}

//outside border
.vs__dropdown-toggle {
  //border on outside of option
  $base-list: rounded-none border-primary-lt border;
  @include includeTailwindStyles($base-list);
}

.product_option {
  $base-list: pr-7 pl-7 pt-3 pb-3 h-14 text-xl;
  @include includeTailwindStyles($base-list);
  @include u-vcenter;
}

.vs__dropdown-option--highlight {
  background-color: transparent !important;

  .product_option {
    $base-list: bg-accent-primary text-light-lt;
    @include includeTailwindStyles($base-list);
  }
}

</style>
