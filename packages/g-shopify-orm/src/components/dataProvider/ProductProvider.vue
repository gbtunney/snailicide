<script>
import {getRandomNumber, isInteger, toInteger} from "@snailicide/g-library"
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {LoaderMixin} from './../../mixins/LoaderMixin'

import options from "./../../../options.json"
const {EDITABLE_DEFAULTS, LOAD_MODE, SELECTION_MODE_OPTIONS} = options

import {
  Product,
  Variant,
  ProductImage,
} from '../../orm/models'

export default {
  name: "ProductProvider",
  mixins: [LoaderMixin],
  components: {},
  data: function () {
    return {}
  },
  props: {
     /**
      * shopify product handle or boolean (if not loaded)
      */
    handle: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Selected Variant SID(9 digits) or Position(integer)
     * @values SID, position
     */
    variant_id: {
      type: Number,  /* ID OR SID */
      default: 1
    },
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
     * Get list of Products's OptionValues ??by handle or boolean?
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
    Handle: function () {
      return this.$props.handle
    },
    Ready: function () {
      return (this.Product && this.SelectedVariant)
    },
    SelectedVariant: {
      get: function () {
        if (!this.Product) return;
        /*const shopifyID = this.Instance.getVariantPositionToID()
        if (shopifyID != this.Instance.variant_id) {
          console.log("-----------------variant is position, need to update to SID", shopifyID, this.Instance.variant_id)
          this.updateInstance({variant_id: shopifyID})
        }*/
        return Variant.query().whereId(this.Instance.variant_id).with('options.Variants|image').first()
      },
      set: function (value) {
        if (!this.Product) return false;
        //if ((value && !this.Instance.variant_id) || (value && value.id != this.Instance.variant_id)) {
        //NOTE: We are resetting the quantity here.
        //  this.updateInstance({variant_id: value.id, quantity: 1})
        // this.$emit('changed', this.SelectedVariant)
        //}
      }
    },
    SelectedVariantImage: function () {
      if (!this.Ready) return;
      return this.SelectedVariant.Image
    },
    SelectedOptionList: function () {
      if (!this.Ready || !this.Instance.variant_id || !this.SelectedVariant) return
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
      if (!this.Product || !this.Instance) return;
      return this.Product.Variants;
    },
    Options: function () {
      if (!this.Product || !this.Instance) return;
      //if (!this.$props.enableoptions || !this.Ready) return false
      return this.Product.Options;
    },
    Images: function () {
      if (!this.Product || !this.Variants) return; //todo: use  ready?
      return this.Product.Images;
    },
  },
  render() {
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
<!--
//{ Loading,Variants,Images,Options,OptionValueList,
// Product,ProductImage,SelectedVariant,SelectedVariantImage,SelectedOptionList,SelectedOption,
// RequestedQuantity , UpdateInstance , UpdateOption,UpdateVariant,addToCartEnabled}
-->
