<script lang="ts">
import {getRandomNumber} from "@snailicide/g-library";
import EditableOptionsMixins from "../../mixins/EditableOptionsMixins";
import LoadModeMixin from "../../mixins/LoadModeMixin";
import {
  ProductGroupBase,
  ProductInstanceBase,
  ProductInstanceGroup,
  ProductInstanceSingle,
} from '../models'
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
const defaultInstance = ProductInstanceSingle.fields();
export default{
  name: 'CartProvider',
  mixins: [EditableOptionsMixins, LoadModeMixin],
  mounted() {
    //this.initializeLoadInstance(this.Handle, this.LoadMode)
  },

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
      _cartID: false
    }
  },
  watch: {

    id: {
      immediate: true,
      async handler(value, oldValue) {
        //this.$store.dispatch('productloader/deleteAll') todo: MAKE DELETE PROP
        if (value !== false/* && (value != this.RefID)*/) {
          console.log("GROUP : ID IS BEING CHANGED!!!!!!!!! new:", value, "REF :")
        //  this.initializeGroup()
         // const response = await this.insertOrUpdateGroupInstance(this.$props);
          //console.log("response", response, "REF :", this.Instance, this.Items)
        }
      }
    },
  },
  computed: {
    //getCartID
    ...mapGetters('shopifybuy', [
      'getCartID',
      'getLineItems'
    ]),
    SlotProps() {
      return {
        Instance: this.Instance,
        Children: this.Items,
        Items: this.getLineItems,
        /*    note: this.$props.note,*/

        /*functions*/
        AddGroupToCart: this._addToCart,
        UpdateInstance: this.updateInstance, //these are all functions

        ID: this.getCartID
      }
    },
    RefID: function () {
      return this.$props.id
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
     * the total amount of items in the group
     */
    max_item_count: {
      type: [Number, Boolean],
      default: false,
    },
  },
  methods: {
  },
}
</script>
