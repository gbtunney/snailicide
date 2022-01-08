<script>
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {LoaderMixin} from './../../mixins/LoaderMixin'
import {ProductMixins} from './../../mixins/ProductMixins'
import options from "./../../../options.json"
const {EDITABLE_DEFAULTS, LOAD_MODE, SELECTION_MODE_OPTIONS} = options

import {
  Product,
  Variant,
  ProductImage,
} from '../../orm/models'
import {isShopifyID} from "./../../scripts/shopify";

export default {
  name: "ProductProvider",
  mixins: [LoaderMixin,ProductMixins],
  components: {},
  data: function () {
    return {
      selected_variant_id :false
    }
  },
  props: {
  },
  methods: {
    //reduces the variant list by relevant options.
    getVariantsByOptionValues(option_value_array, boolRequireAll = true) {
      if (!option_value_array || option_value_array.length === 0) return false;
      if (option_value_array && option_value_array.length === 1) return option_value_array[0].Variants

      const mappedArray = option_value_array.map(function (value) {
        return value.Variants;
      }).filter(function (_variants) {
        //todo:ref.$props.ignoreInventory
        return (_variants && _variants.length > 0)
      })
      if (option_value_array.length !== mappedArray.length) return []
      return mappedArray.reduce((acc, item) => {
        return R.innerJoin(
            (record0, record1) => record0.id === record1.id,
            acc,
            item
        );
      }, mappedArray[0]);
    },
    /**
     * Get list of Products's OptionValues option,option handle or boolean?
     * todo: figure out how to bypass disabling proper
     * @param {boolean|string|Object<productoption>} option
     * @return {boolean|Object<productoptionvalue>} - list of ProductOptionValue entities
     * @public
     */
    OptionValueList: function (option) {
      if (!this.Product || !option) return false;
      let that = this;
      let valueListForOption = this.Product.getOptionValueList(option, "Variants|Images")
      return valueListForOption.map(function (_value) {
        let variantArr = that.getVariantsByOptionValues(that.getMergedOptionArray(_value));
        let isDisabled = false;
        if (variantArr && variantArr.length === 0) isDisabled = true;
        else if ((variantArr.length === 1 && variantArr[0].IsAvailable === false)) isDisabled = true;
        return {
          ..._value,
          $isDisabled: isDisabled,
          isSelected: that.isOptionValueSelected(_value),
          thumbnail: _value.Thumbnail
        }
      })
    },
    isOptionValueSelected(_value) {
      if (!_value || !_value.parent_handle) return false
      const selected_value_for_parent = this.SelectedVariant.getOptionValue(_value.parent_handle)
      if (selected_value_for_parent) return (_value["$id"] === selected_value_for_parent["$id"]);
      return false;
    },
    /**
     * Get list of SelectedVariant's OptionValues ??by handle or boolean?
     *
     * @param {boolean|string|Object<productoption>} option
     * @return {boolean|Object<productoptionvalue>} - list of ProductOptionValue entities
     * @public
     */
    SelectedOptionValue: function (option) {
      if (!this.Ready) return;
      if (!option) return false;
      return this.SelectedVariant.getOptionValue(option.handle);
    },
    //these are good.  change to 'update selected'
    updateOption(option) {
      if (!this.Product || !this.Product.id) return false
      let newVarArray = this.getVariantsByOptionValues(this.getMergedOptionArray(option));
      console.log("updateOption ::: Called", this.getMergedOptionArray(option), newVarArray)
      if (newVarArray && newVarArray.length === 1) this.updateVariant(newVarArray[0])
    },
    //todo : move to variant or something
    getMergedOptionArray(value) {
      const value_map = R.indexBy(R.prop('parent_handle'), (!RA.isArray(value)) ? [value] : value);
      return [...Object.values({...this.SelectedVariant.getOptionValueIndexedBy(), ...value_map})]
    },
  },
  computed: {
    /* ...mapState('entities/products', {   //cartLoading
       isFetching:function (state){
         console.log("checking status", state.fetching)
         return false//state.fetching
       }
     }),*/
    Ready: function () {
      return (this.Product && this.SelectedVariant) ? true : false
    },
    SelectedVariant(){
        if (!this.Product) return;
        const shopifyID = this.getVariantPositionToID( this.$props.variant_id,this.Handle  )
    /* if (shopifyID != this.Instance.variant_id) {
          console.log("-----------------variant is position, need to update to SID", shopifyID, this.Instance.variant_id)
          this.updateInstance({variant_id: shopifyID})
        }*/
        return  ( isShopifyID(shopifyID)  )
            ?  Variant.query().whereId(shopifyID).with('options.Variants|image').first()
            : false
    },
    SelectedVariantImage: function () {
      if (!this.Ready) return;
      return this.SelectedVariant.Image
    },
    SelectedOptionList: function () {
      if (!this.Ready || !this.SelectedVariant) return
      return this.SelectedVariant.options;
    },
    /* Quantity: function () {
       if (!this.Ready) return;
       return this.Instance.quantity;
     },
     QuantityAvailable: function () {
       if (!this.Ready || !this.Instance.variant_id || !this.SelectedVariant) return;
       return (this.SelectedVariant.inventory_quantity - this.Instance.quantity);
     },*/
    Product: function () {
      if (!this.Handle) return;
      return Product.getProductByHandle(this.Handle)
    },
    ProductImage: function () {
      //todo: fix
      if (!this.Product || !this.Ready) return;
      return ProductImage.query().where("product_id", this.Product.id).where("position", 1).orderBy('position').withAll().first()
    },
    Variants: function () {
      if (!this.Product) return;
      return this.Product.Variants;
    },
    Options: function () {
      if (!this.Ready ) return;
      //if (!this.$props.enableoptions || !this.Ready) return false
      return this.Product.Options;
    },
    Images: function () {
      if (!this.Product || !this.Variants) return; //todo: use  ready?
      return this.Product.Images;
    },
  },
  render() {
    /*   //instance variables
          Instance: this.Instance,
          QuantityAvailable: this.QuantityAvailable,
          Quantity: this.Quantity,
          UpdateInstance: this.updateInstance, //these are all functions
          UpdateOption: this.updateOption,
          UpdateVariant: this.updateVariant,
          addToCartEnabled: this.$props.add_to_cart_enabled,
          addToCart: this.addToCart,
          loadTest: this.Status,*/
    /**
     * @slot
     * @binding {boolean} Ready - product & selected variant id resolve and are available.
     * @binding {Array<variant>} Variants - list of variant entities for product
     * @binding {Array<productimage>} Images - list of productimage entities for product
     * @binding {Array<productoption>} Options - list of productoption entities
     * @binding {Array<productoptionvalue>} OptionValueList - *function* list of productoptionvalue entities
     *
     * @binding {Object<product>} Product - Product Entity
     * @binding {Object<productimage>} ProductImage - Default ProductImage Entity
     * @binding {Object<variant>} SelectedVariant - Selected Variant Entity
     * @binding {Object<productimage>} SelectedVariant - SelectedVariant ProductImage Entity
     */
    return this.$scopedSlots.default(
        {
          Ready: this.Ready,
          /** Gets multiple items.  */
          Variants: this.Variants,
          Images: this.Images,
          Options: this.Options,
          OptionValueList: this.OptionValueList, //FUNCTION  function that gets list option values by option id

          /** Gets single items.  */
          Product: this.Product,
          ProductImage: this.ProductImage,
          SelectedVariant: this.SelectedVariant,
          SelectedVariantImage: this.SelectedVariantImage,

          SelectedOptionList: this.SelectedOptionList, //?????do i need this????? returns an array
          /** function that returns a optionvalue for a given option */
          SelectedOptionValue: this.SelectedOptionValue,//FUNCTION single optionvalues by option
        }
    )
  },
}
</script>
<docs lang="md">
Product Provider Component (Renderless)

## Examples
with vue-select for variants.

```jsx
<ProductProvider handle="local" :variant_id="7">
  <div slot-scope="{Ready,Variants,SelectedVariant}">
    <h1>Test componnet</h1>
    <div v-if="Ready">
      <div v-if="SelectedVariant">
        <v-select autocomplete="on"
            v-if="Variants"
            @option:selecting="updateVariant"
            :value="SelectedVariant"
            :options="Variants"
            label="title"
            :clearable=false>
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
```
</docs>
