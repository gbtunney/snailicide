<script>
import {ProductMixins} from '../../mixins/ProductMixins'
import {getRandomNumber} from "@snailicide/g-library";
import EditableOptionsMixins from "../../mixins/EditableOptionsMixins";
import LoadModeMixin from "../../mixins/LoadModeMixin";
import {
  Cart,
  ProductGroupBase,
  ProductInstanceBase,
  ProductInstanceGroup,
  ProductInstanceSingle,
} from '../models'

const defaultInstance = ProductInstanceSingle.fields();

export default {
  name: "ProductGroupProvider",
  mixins: [EditableOptionsMixins, LoadModeMixin],
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
   * @binding {Object<ProductGroupBase>} Instance - The ProductGroupBase entit
   * @binding {Array<productbase>} Items - array of productbase entity
   * @binding {function} AddToCart - Add item to cart
   * @binding {function} UpdateInstance
   */
  render() {
    return this.$scopedSlots.default(this.SlotProps)
  },
  data: function () {
    return {
      _refID: getRandomNumber(1000000)
    }
  },
  watch: {
    items: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(" items changed from " + oldValue + " to " + newValue, defaultInstance.selection_mode.value,)
      }
    },
    id: {
      immediate: true,
      async handler(value, oldValue) {
        //this.$store.dispatch('productloader/deleteAll') todo: MAKE DELETE PROP
        if (value !== false/* && (value != this.RefID)*/) {
          console.log("GROUP : ID IS BEING CHANGED!!!!!!!!! new:", value, "REF :")
          this.initializeGroup()
          const response = await this.insertOrUpdateGroupInstance(this.$props);
          console.log("response", response, "REF :", this.Instance, this.Items)
        }
      }
    },
  },
  computed: {
    SlotProps() {
      return {
        Instance: this.Instance,

        Children: this.Items,
        Items: this.Items,
        /*    note: this.$props.note,*/

        /*functions*/
        AddToCart: this.addToCart,
        UpdateInstance: this.updateInstance, //these are all functions

        ID: this.RefID
      }
    },
    RefID: function () {
      return this.$props.id
    },
    Instance: function () {
      if (this.RefID) {
        return ProductGroupBase.query().whereId(this.RefID).with("Variant|Group").first();
      }
      return false;
    },
    Ready: function () {
      return (this.Product && this.Instance && this.SelectedVariant)
    },
    Items: function () {
      const items = ProductInstanceBase.query().where("group_id", this.RefID).withAll().all();
      return items;
    },
    ItemCount: function () {
      return this.Items.length
    },
    ItemProps: function () {
      return {
        /*  load_mode: "LOAD_HANDLE_NOT_IN_DATABASE",*/
        quantity_editable: true,
        variant_editable: true,
        add_to_cart_enabled: true,
        options_editable: false,
      }
    }
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
     * @values GROUP,CART
     */
    type: {
      type: String,
      default: defaultInstance.type.value,
    },
    /**
     * array of children items .
     * @values  INSTANCE, LINE_ITEM
     */
    items: {
      type: [Array],
      default: () => ["empty"],
    },
    /**
     * the total amount of items in the group
     */
    item_count: {
      type: [Number],
      default: 0,
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
      //  const addtoCartResponse = await Cart.api().addItems([this.Instance])
      console.log("GROUP TRYING TO ADD TO CART ", instance, [this.Instance.NewLineItem])
    },
    initializeGroup(data = this.$props) {
      const {items} = this.$props
      this.$store.dispatch("productloader/load_items", [items, 'LOAD_HANDLE_NOT_IN_DATABASE']/*this.$props.load_mode*/)
    },
    async insertOrUpdateGroupInstance(_data = {}) {
      return ProductInstanceGroup.insertOrUpdate({
        data: _data
      })
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
