<script>
import {ProductMixins} from './../../mixins/ProductMixins'
import {getRandomNumber} from "@snailicide/g-library";
import EditableOptionsMixins from "../../mixins/EditableOptionsMixins";
import LoadModeMixin from "../../mixins/LoadModeMixin";
import {
  Cart,
  ProductInstanceBase,
  ProductInstanceSingle, Variant,
} from './../../orm/models'

const defaultInstance = ProductInstanceSingle.fields();
//import moduleProductLoader from "./../../modules/moduleProductLoader";

export default {
  name: "ProductInstanceProvider",
  mixins: [ProductMixins, EditableOptionsMixins, LoadModeMixin],
  mounted() {
    this.initializeLoadInstance(this.Handle, this.LoadMode)
  },
  /*
     //instance variables
          Instance: this.Instance,
          QuantityAvailable: this.QuantityAvailable,
          Quantity: this.Quantity,
          UpdateInstance: this.updateInstance, //these are all functions
          UpdateOption: this.updateOption,
          UpdateVariant: this.updateVariant,
          addToCartEnabled: this.$props.add_to_cart_enabled,
          addToCart: this.addToCart,
          loadTest: this.Status,
   */
  /**
   * @slot
   * @binding {Object<productbase>} Instance - The product instance entity
   * @binding {number} QuantityAvailable - quantity left that can be added to cart (inventory count)
   * @binding {number} Quantity - requested quantity
   * @binding {function} AddToCart - Add item to cart
   * @binding {function} UpdateInstance
   * @binding {function} UpdateVariant
   * @binding {function} UpdateOption
   */
  render() {
    return this.$scopedSlots.default({
      Instance: this.Instance,
      QuantityAvailable: this.QuantityAvailable,
      Quantity: this.Quantity,

      /*functions*/
      AddToCart: this.addToCart,
      UpdateInstance: this.updateInstance, //these are all functions
      UpdateOption: this.updateOption,
      UpdateVariant: this.updateVariant,

      ID: this.RefID
    })
  },
  data: function () {
    return {
      _refID: getRandomNumber(1000000)
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(value) {
        if (value !== false/* && (value != this.RefID)*/) {
          console.log(" id changed from ", value, this.$props)
          this.insertOrUpdateInstance(this.$props);
        }
      }
    },
  },
  computed: {
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
  },
  methods: {
    /**
     * Add to Cart function
     *
     * @param {Object<productbase>} Instance
     * @return {void}
     * @public
     */
    async addToCart(instance) {
      const addtoCartResponse = await Cart.api().addItems([this.Instance])
      console.log("SERVER TRYING TO ADD ITEM ", instance, [this.Instance.NewLineItem], addtoCartResponse)
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
      if (!variant_editable) return false;
      console.log("variant update  ::: Called", variant)
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
      if (!this.$props.enableoptions || !this.Product || !this.Product.id) return false
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
    updateInstance(_data, instance) {
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
