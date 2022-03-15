<script>
import {defaultMutations} from "vuex-easy-access";
import {Cart, LineItem} from "./../../orm/models"

const MOCK_CART = true;



//import ProductGroupProvider from "./ProductGroupProvider.vue"

export default {
  name: "CartProvider",
//  extends: ProductGroupProvider,
  data: function () {
    return { mounted:false}
  },
  async mounted(){

 const resppp  = await   this.$store.dispatch("shopifycart/loadCart",{MOCK_CART:this.$props.mock})
    console.log("reso",LineItem.all())
     this.$data.mounted=true
  },
  props: {
    mock:{
      default:false,
      type:Boolean
    }
  },
  computed:{
    Token() {
     return (this.$data.mounted &&  this.$store )? this.$store.get('shopifycart/token'): "not set"
    },
    Cart(){
      return  Cart.query().where("token", this.Token  ).withAll().first()//this.$store.get('shopifycart/cart')
    },
    Items: function () {
      //const items = LineItem.query().where("group_id", this.RefID).withAll().all();
      return this.Cart.items;
    },
  },
  render() {
    return this.$scopedSlots.default({
        Token: this.Token,
        Cart: this.Cart,
        Mounted: this.$data.mounted,

      Instance:  this.Instance,

      Children: this.Items,
      Items: this.Items,
      /*    note: this.$props.note,*/

      /*functions*/
      AddToCart: this.addToCart,
      UpdateInstance: this.updateInstance, //these are all functions

    })
  }
}

</script>
