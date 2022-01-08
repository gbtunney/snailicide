<script>
import {ProductMixins} from './../../mixins/ProductMixins'
import {getRandomNumber} from "@snailicide/g-library";
import EditableOptionsMixins from "../../mixins/EditableOptionsMixins";
import LoadModeMixin from "../../mixins/LoadModeMixin";
import {
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
  render() {
    return this.$scoxpedSlots.default({
      Instance: this.Instance,
      ID: this.RefID
    })
  },
  data: function () {
    return {}
  },
  watch: {
    id: {
      immediate: true,
      handler(value, oldValue) {
        if (value/* && (value != this.RefID)*/) {
          console.log(" id changed from ", value)
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
      // if (this.Status == "LOADING") return
      return (this.Product && this.Instance && this.SelectedVariant) ? true : false;
    }, Quantity: function () {
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
        if (shopifyID != this.Instance.variant_id) {
          console.log("-----------------variant is position, need to update to SID", shopifyID, this.Instance.variant_id)
          this.updateInstance({variant_id: shopifyID})
        }
        return Variant.query().whereId(this.Instance.variant_id).with('options.Variants|image').first()
      },
      set: function (value) {
        if (!this.Instance || !this.Instance.variant_id || !this.Product) return;
        if ((value && !this.Instance.variant_id) || (value && value.id != this.Instance.variant_id)) {
          //NOTE: We are resetting the quantity here.
          this.updateInstance({variant_id: value.id, quantity: 1})
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
      type: [Number],
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
      return
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
