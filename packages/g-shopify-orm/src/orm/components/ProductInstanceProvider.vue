<script>
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import ProductMixins from '../../mixins/ProductMixins'
import {getRandomNumber} from "@snailicide/g-library";

//MIXINS.
import EditableOptionsMixins from "../../mixins/EditableOptionsMixins";
import LoadModeMixin from "../../mixins/LoadModeMixin";
//import {Shopify} from 'vue-shopify-buy'
//PRODUCT TO EXTEND.
import ProductProvider from "./ProductProvider.vue"
import {
  ProductInstanceBase,
  ProductInstanceSingle, Variant,
} from '../models'
import {
  composeGid,
} from "@shopify/admin-graphql-api-utilities";
const defaultInstance = ProductInstanceSingle.fields();
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: "ProductInstanceProviderExtended",
  mixins: [ProductMixins, EditableOptionsMixins, LoadModeMixin],
  extends: ProductProvider,
  props: {
    /**
     * id -to make a new instance if not provided.
     */
    id: {
      type: [Number, Boolean],
      default: getRandomNumber(1000000),
    },
    /**
     * type of instance
     * @values INSTANCE, LINE_ITEM , maybe group??  etc/
     */
    type: {
      type: String,
      default: defaultInstance.type.value,
    },
    quantity: {
      type: Number,
      default: 1
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(value) {
        if (value !== false) this.setUpdateInstance()
      }
    },
    quantity: {
      handler() {
        this.insertOrUpdateInstance(this.$props)
      }
    },
  },
  mounted() {
    this.initializeLoadInstance(this.Handle, this.LoadMode)
  },
  /**
   * @slot
   * @binding {Object<productbase>} Instance - The product instance entity
   * @binding {number} QuantityAvailable - quantity left that can be added to cart (inventory count)
   * @binding {number} Quantity - requested quantity
   * @binding {function} AddToCart - Add item to cart
   * @binding {function} UpdateInstance
   * @binding {function} UpdateVariant
   * @binding {function} UpdateOption
   * @binding {boolean} CartLoading - indicates cart loading status
   */
  render() {
    return this.$scopedSlots.default({
          ...{
            Instance: this.Instance,
            QuantityAvailable: this.QuantityAvailable,
            Quantity: this.Quantity,

            /*functions*/
            AddToCart: this.addToCart,
            UpdateInstance: this.updateInstance, //these are all functions
            UpdateOption: this.updateOption,
            UpdateVariant: this.updateVariant,
            CartLoading: this.cartLoading,
            ID: this.RefID
          }, ...this.SlotProps
        }
    )
  },
  computed: {
    ...mapState('shopifybuy', {
      cartLoading: state => state.cartLoading,
    }),
    RefID: function () {
      return this.$props.id
    },
    Instance: function () {
      if (this.RefID) {
        return ProductInstanceBase.query().whereId(this.RefID).with("Variant|Group").first();
      }
      return false;
    },
    Ready: function () {
      return (this.Product && this.Instance && this.SelectedVariant)
    },
    Quantity: function () {
      if (!this.Ready) return;
      return this.Instance.quantity;
    },
    QuantityAvailable: function () {
      if (!this.Ready || !this.Instance.variant_id || !this.SelectedVariant) return;
      return (this.SelectedVariant.inventory_quantity - this.Instance.quantity);
    },
    SelectedVariant: {
      get: function () {
        if (!this.Instance || !this.Instance.variant_id || !this.Product) return;
        const shopifyID = this.Instance.getVariantPositionToID()
        if (shopifyID !== this.Instance.variant_id) {
          console.log("-----------------variant is position, need to update to SID", shopifyID, this.Instance.variant_id)
          this.updateInstance({variant_id: shopifyID})
        }
        return Variant.query().whereId(this.Instance.variant_id).with('options.Variants|image').first()
      },
      set: function (value) {
        if (!this.Instance || !this.Instance.variant_id || !this.Product) return;
        if ((value && !this.Instance.variant_id) || (value && value.id !== this.Instance.variant_id)) {
          //NOTE: We are resetting the quantity here.
          this.updateInstance({variant_id: value.id, quantity: 1})
          /**
           * Changed event.
           * @event changed
           * @property {Object<variant>} selected_variant new value set
           */
          this.$emit('changed', this.SelectedVariant)
        }
      }
    },
  },
  methods: {
    setUpdateInstance(props = this.$props) {
      this.insertOrUpdateInstance(props);
    },
    getMergedOptionArray(value) {
      const value_map = R.indexBy(R.prop('parent_handle'), RA.ensureArray(value));
      return [...Object.values({...this.SelectedVariant.getOptionValueIndexedBy(), ...value_map})]
    },
    getVariantsByOptionValues(option_value_array) {
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
    isOptionValueSelected(_value) {
      if (!_value || !_value.parent_handle) return false
      const selected_value_for_parent = this.SelectedVariant.getOptionValue(_value.parent_handle)
      if (selected_value_for_parent) return (_value["$id"] === selected_value_for_parent["$id"]);
      return false;
    },
    /**
     * Add to Cart function
     *
     * @param {Object<productbase>} Instance
     * @return {void}
     * @public
     */
    async addToCart(instance) {
      return await this.$store.dispatch("shopifybuy/addToCart",this.Instance)
      // const cart = await this.$shopify.getCart()//addItem
    },
    /**
     * Update Variant function
     *
     * @param {Object<variant>} variant
     * @param {boolean} variant_editable - if false, cant be changed.
     * @return {void}
     * @public
     */
    updateVariant(variant = {}, variant_editable = (this.Instance) ? this.Instance.variant_editable : this.$props.variant_editable) {  //TODO: change this name - i hate it.
      if (!variant_editable) return;
      console.log("variant update  ::: Called!!", this.$router)
      if (this.$props.ignoreInventory) this.SelectedVariant = variant; //doesnt do anythinggggg. override availability
      else if (variant.IsAvailable) this.SelectedVariant = variant;
    },
    /**
     * Update Option function
     *
     * @param {Object<productoptionvalue>} option
     * @return {void}
     * @public
     */
    updateOption(option) {
      if (/*!this.$props.enableoptions || */!this.Product || !this.Product.id) return
      let newVarArray = this.getVariantsByOptionValues(this.getMergedOptionArray(option));
      console.log("updateOption ::: Called", this.getMergedOptionArray(option), newVarArray)
      if (newVarArray && newVarArray.length === 1) this.updateVariant(newVarArray[0])
    },
    insertOrUpdateInstance(_data = {}) {
      return ProductInstanceBase.insertOrUpdate({
        data: _data
      })
    },
    ///todo: replace
    updateInstance(_data) {
      const response = ProductInstanceBase.update({
        where: this.RefID,
        data: _data
      })
      //this.$emit('changed', this.Instance, response)
      return response
    },
    async removeInstance(instance) {
      //todo: finish
    },
  },
}
</script>
<docs lang="md">
Product Instance Provider Component (Renderless)

## Examples
with loader working

```jsx
<ProductInstanceProvider :handle="'local'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="8">
  <div slot-scope="{Instance,ID}">
    {{ ID }}
  </div>
</ProductInstanceProvider>
<ProductInstanceProvider :handle="'balance'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="8">
  <div slot-scope="{Instance,ID}">
    {{ ID }}
  </div>
</ProductInstanceProvider>
<ProductInstanceProvider :handle="'balance'" load_mode="LOAD_HANDLE_NOT_IN_DATABASE" variant_id="8">
  <div slot-scope="{Instance,ID}">
    {{ ID }}
  </div>
</ProductInstanceProvider>
```
</docs>
