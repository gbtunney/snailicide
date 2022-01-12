<template>
  <div id="app">
    <h1>Shopify Buy Vue Test {{StorefrontID}}</h1>
    <shopify-product handle="local" v-slot="{ product, coverImage, variants, loading, error, addToCart }">
      <div v-if="loading">Loading</div>
      <div v-else-if="error">{{ error[0].message }}</div>
      <div v-else>
        <img :src="coverImage.src" style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%;">
        <h2>{{ product.title }}</h2>
        <div v-html="product.description"></div>
        <div><strong>CHF {{ variants[0].price }}</strong></div>
        <button @click="addToCart(variants[0]) ;">Add to cart</button>
      </div>
    </shopify-product>

    <shopify-cart @ready="getMyCart" v-slot="{ lineItems, amount, totalPriceV2, webUrl, cartIsUpdating, removeItem, updateItemQuantity }">
      <div v-if="lineItems.length > 0" class="cart">
        <div v-if="cartIsUpdating">Loading</div>
        <table class="shopify-cart__list">
          <tr
              v-for="item in lineItems"
              :key="item.id">
            <td>{{ item.quantity }}x {{ item.title }} - {{item.variant.title}}</td>
            <td>{{ item.variant.price }}</td>
            <td><input type="number" :value="item.quantity" @input="updateItemQuantity(item, parseInt($event.target.value))"></td>
            <td><button @click.prevent="removeItem(item)">x</button></td>
          </tr>
        </table>

        Total {{ amount }} {{ totalPriceV2.currencyCode }}

        <a :href="webUrl">Go to checkout</a>
      </div>
    </shopify-cart>
  </div>
</template>

<script >

/*const storefrontId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMDc5Nzg1MTAw";
const adminGraphqlId = atob(storefrontId);
console.log(adminGraphqlId) // prints "gid://shopify/Product/10079785100"
*/
import Client from 'shopify-buy';
import Vue from 'vue';
export default Vue.extend({
  name: 'app',
  props:{
    id:{
      default:false,
      type:[Boolean,Number]
  }
  },methods:{
    async getMyCart(_data,mycart){
     this.$store.dispatch('shopifycart/getCart')
/*
      client.checkout.create().then((checkout) => {
        // Do something with the checkout
        console.log(checkout);
      });*/


      //window.localStorage.getItem('CHECKOUT_ID_STORAGE_KEY') || '',
    },
    testMe(_variant){
     // console.log(" TEST MEEEE " , atob(`gid://shopify/ProductVariant/${_variant.id}`))

    }
  },
  watch:{
     id: {
           immediate: true,
           handler(newValue , oldValue) {
             console.log(" id changed from " + oldValue + " to " + newValue)
           }
         }
  },
  computed:{
    StorefrontID(){
      if (this.$props.id !== false){
        return btoa(`gid://shopify/Product/${this.$props.id}`)
      }else{
        return false
      }
    }
  },
  data() {
    return {
      product: null,
      products: [],
      testProductId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzI2NTE5ODE5Mzg4MDY='
    }
  },

  async created() {
    this.$shopify.product.fetch(this.testProductId).then(product => {
      this.product = product
    })

   // const storefrontId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzI2NTE5ODE5Mzg4MDY=";
  //  const adminGraphqlId = atob(storefrontId);
 //   console.log("storefrontId",adminGraphqlId,btoa(adminGraphqlId), atob(this.StorefrontID) ) // prints "gid://shopify/Product/10079785100"
    this.$shopify.product.fetchAll(250).then(products => this.products = products)
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
