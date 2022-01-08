<script>
import {ProductInstanceSingle, ProductInstanceGroup, LineItem,Cart,ProductGroupBase} from "../..";
import {getRandomNumber} from "../../scripts/generic";
import {USE_SERVER} from "../../settings"
import {mapState,mapActions,mapGetters} from "vuex";
import * as R from "ramda";
const {omit} = R

export default {
  name: "cart",
  components: {},
  data: function () {
    return {
      _refID : false,
     // this.$data._refID
    }
  },
  props: {
    useServer: {
      type:Boolean,
      default : USE_SERVER
    },
    debugMode: {
      type:Boolean,
      default : true
    },
    id : {
      type: [Number],
      default: getRandomNumber(1000000),
    },
    instance: {
      type: [Object, Boolean],
      default: false,
    },
    variant: {
      type: Number,  /* ID OR SID */
      default: 1,
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log("ID SET!!!!!!" ,newValue,this.getCart)
        this.$data._refID = this.getCart.id

        Cart.commit((state) => {

          state.cart = this.getCart;//Cart.query().where("token", state.checkoutId).withAll().first();
        })
      /*  if (this.Instance){
          Cart.commit((state) => {
            state.checkoutId = that.Instance.token
            state.cart = that.Instance;//Cart.query().where("token", state.checkoutId).withAll().first();
          })
        }
*/
        // this.init();

            }
    },

  },
  methods: {
    UpdateLineItem(instance) { ///node thihs is also in the lineitem model????.
      console.log("calling update line item " , instance)

      var test;
      if (instance && instance.id ) {
        test = {[instance.id]: instance.quantity}
      }
      if ( instance.quantity == 0){
        instance.$delete();
      }
      Cart.api().updateItems([test],this.$props.useServer)
      return test;
    },
    updateAll(instance){
      var test = Object.fromEntries(this.Items.reduce((accumulator, currentValue, currentIndex, array) => {
        if (currentValue && currentValue.id && currentValue.quantity) {
          return  accumulator.set(currentValue.id,currentValue.quantity)
        }
      }, new Map()) )
      if ( this.$props.useServer) {
        console.warn("Update ALL LineItem::::::::", test)
      }else{
        ///SERVICE CALL HERE????
      }
      return test;
    },
    async addToCart2() {
      var junkitem = {
        id: 22589265510518,
        quantity: 2,
        properties: {
          message: "color b"
        }
      }
      var itemaddresponse = await Cart.api().addItems([this.Instance.LineItem, junkitem])
      var cartresponse = await Cart.api().fetchCart()
      console.log("reloaded cart", cartresponse, this.Instance.$toJson())
    },
     init() {
      if (!this.$props.instance) return
      let that = this
      //Cart HAS TO BE merged with an id with a number.
      if ( this.$props.instance ){
        const response =  Cart.insert({
          data: { ...this.$props.instance, id: this.$data._refID}
        })
        if (this.Instance){
           Cart.commit((state) => {
            state.checkoutId = that.Instance.token
            state.cart = that.Instance;//Cart.query().where("token", state.checkoutId).withAll().first();
          })
        }
      }
      /*
      let that = this
      const response = await Cart.api().fetchCart();

      await Cart.commit((state) => {

        if (state.checkoutId) {
          console.log("qurrrtrrrrring gggggg", state, Cart.query().where("token", state.checkoutId).withAll().first())
          state.cart = Cart.query().where("token", state.checkoutId).withAll().first();
          if ( state.cart && state.cart.id) that.$data._refID  = state.cart.id;
        }

      })
      console.log("completess")*/
    },
  },
  computed: {
     ...mapGetters('shopify',[
      'getCart'
    ]),
    ...mapState('entities/cart', {   //cartLoading
      isCartLoading: (state) => state.fetching,
      cart: (state) => state.cart
    }),
    Instance: function () {
       //return this.getCart
      return LineItem.query().where("group_id", this.$data._refID).withAll().all();

    },
    Items: function () {
      return LineItem.query().where("group_id", this.$data._refID).withAll().all();
    },
  },
 async mounted() {
   // this.init();
  },
   render() {
    return this.$scopedSlots.default(
        {
          Cart:this.getCart,
          isCartLoading: false,
          TotalPrice: () => (this.Instance) ? this.Instance.TotalPrice : false,
          ItemsAvailable: () => (this.Instance) ? this.Instance.IsAvailable : false,
          Children: this.Items,
          LineItems: this.Items,
          UpdateLineItem:this.UpdateLineItem,
        }
    )
  },
}
</script>
