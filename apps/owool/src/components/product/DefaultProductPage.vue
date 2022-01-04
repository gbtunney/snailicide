<template>

  <product-child @changed="variantChanged" :handle="$props.handle" :variant_id="Variant" :load_handle="true">
    <brooklyn-product-template id="shopify-section-product-template"
        slot-scope="{Ready,Quantity , addToCart, QuantityAvailable,loadTest,Product,Variants,SelectedVariant,UpdateOption,Options,OptionValueList,SelectedOptionValue,UpdateInstance,Images,Instance,UpdateVariant}">
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
                    :class="(parent_handle != 'color')?'hidden':''"

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
                  class="flex font-secondary uppercase items-center text-lg flex-row h-full w-full p-2.5">
                <SfProductOption color="#ff0000" :label="title">
                  <template #color="">
                    <div v-if="image"
                        class="sf-product-option__color">
                      <img v-if='image' :src="image.src" class="object-cover"/>
                    </div>

                  </template>
                </SfProductOption>
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

          <button
              class="bg-accent-primary-dk text-light font-style-sm-caps text-2xl px-4 py-2 "
              @click="addToCart"
          >Add to Cart &#8226; {{ Instance.TotalPrice | toCurrency }}
          </button>
        </div>
      </template>
    </brooklyn-product-template>
  </product-child>

</template>
<script>
import BrooklynProductTemplate from './BrooklynProductTemplate.vue'
import {
  SfGallery, SfQuantitySelector
} from "@storefront-ui/vue";


export default {
  name: "NewDefaultProductPage",
  components: {BrooklynProductTemplate, SfQuantitySelector, SfGallery},
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
    Variant: function () {
      console.log("route", this)
      return 2;
      //return (this.$route.query && this.$route.query.variant) ? parseInt(this.$route.query.variant) : 5;
    }
  },
  methods: {
    variantChanged(_variant) {
      console.log("route", this, this.$route)
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
