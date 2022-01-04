<script>
import options from "./../../../options.json"
const {EDITABLE_DEFAULTS } = options
import {getRandomNumber, isInteger, toInteger} from "@snailicide/g-library"
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {
  Product,
  Variant,
  ProductImage,
  ProductOption,
  ProductOptionValue,
  VariantOption,
  Cart,
  LineItem,
  ProductInstanceSingle,
  ProductInstanceBase,
  ProductGroupBase,
  ProductInstanceGroup,

} from '../../orm/models'
import Vue from 'vue'


const defaultInstance = ProductGroupBase.fields();
console.warn(defaultInstance);
export default {
  name: "GroupInstance",
  components: {},
  data: function () {
    return {
      _refID: false,
      _handle: false,
      _initialized:false,
    }
  },
  props: {
    variant_id: {
      type: [Number,Boolean],  /* ID OR SID */
      default: false ,/*defaultInstance.variant_id.value,*/
    },
    handle: {
      type: [Boolean,String],  /* ID OR SID */
      default:  false,//defaultInstance.handle.value,
    },
    //************** NOT NEEDED above??? ...name *****************//
    id : {
      type: [Number],
      default: getRandomNumber(1000000),
    },
    items:{
      type: [Array],
      default:  () => ["emtyyy"],
    },
    type:{
      type: String,
      default:  defaultInstance.type.value,
    },
    item_count:{
      type: [Number],
      default:  defaultInstance.item_count.value,
    },
    note: {
      type: String,  /* ID OR SID */
      default:   defaultInstance.note.value,
    },
    selection_mode: {
      type: [String, Boolean],
      default: defaultInstance.selection_mode.value
    },
    childprops:{
      type: Object,
      default: function(){
          return  {
            load_mode: "LOAD_HANDLE_NOT_IN_DATABASE",
            quantity_editable: true,
            variant_editable: true,
            add_to_cart_enabled: true,
            options_editable: false,
          }
      }

    },
    quantity_editable: {
      type: Boolean,
      default: EDITABLE_DEFAULTS["quantity"]
    },
    variant_editable: {
      type: Boolean,
      default: EDITABLE_DEFAULTS["variant"]
    },
    options_editable: {
      type: [Boolean, Array],
      default: EDITABLE_DEFAULTS["options"]
    },
    add_to_cart_enabled: {
      type: Boolean,
      default: EDITABLE_DEFAULTS["addToCart"]
    },
    load_mode: {
      type: [Boolean, String, Number],
      default: "LOAD_HANDLE_NOT_IN_DATABASE",
      //TODO CHANGE VALIDATOR TO MY FUNCTION

    },
    enableoptions: {
      type: Boolean,
      default: true,
    },
    variant_priority: {  //this if a shopify id is found in variant, and it has an available product.
      type: Boolean,
      default: true,
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
        if (value && (value != this.$data._refID)) {
          console.log("GROUP : ID IS BEING CHANGED!!!!!!!!! new:", value, "REF :", this.$data._refID)
          this.$data._refID = value;
          this.initializeGroup()
          const response = await this.insertOrUpdateInstance(this.$props);
        }
      }
    },
  },
  computed:{
    Status: function(){
      return Array.from(this.$store.get('productloader/current_loading_map').values()).toString()
    },
    Instance: function () {
      return ProductInstanceBase.query().where("group_id", this.$data._refID).withAll().all();
    },
    Items: function () {
        const items = ProductInstanceBase.query().where("group_id", this.$data._refID).withAll().all();
        return items;
    },
    ItemProps:function(){
      return {
      /*  load_mode: "LOAD_HANDLE_NOT_IN_DATABASE",*/
        quantity_editable: true,
        variant_editable: true,
        add_to_cart_enabled: true,
        options_editable: false,}
    }
  },
  methods:{
   /* Status: function (_handle) {
      return "LOADING"
      //return  this.$store.getters['entities/products/getProductLoader'](_handle)
    },*/
    initializeGroup(data = this.$props) {
      const {items} = this.$props
      this.$store.dispatch("productloader/load_items", [items, 'LOAD_HANDLE_NOT_IN_DATABASE']/*this.$props.load_mode*/)
    },
    insertOrUpdateInstance(_data = {}) {
      return ProductInstanceGroup.insertOrUpdate({
        data: _data
      })
    },
  },
  render() {
    return this.$scopedSlots.default(
        {
          Children: this.Items,
          Items: this.Items,
          ID: this.$data._refID,
          note: this.$props.note,
          Status: this.Status
          /*Cart:this.getCart,
          isCartLoading: false,
          TotalPrice: () => (this.Instance) ? this.Instance.TotalPrice : false,
          ItemsAvailable: () => (this.Instance) ? this.Instance.IsAvailable : false,
          Children: this.Items,
          LineItems: this.Items,
          UpdateLineItem:this.UpdateLineItem,*/
        }
    )
  },
}
</script>
