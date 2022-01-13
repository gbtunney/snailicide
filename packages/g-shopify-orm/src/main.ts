import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import {replaceCharacters} from "@snailicide/g-library"
import {ShopifyBuyPlugin} from './modules/ShopifyBuy'


Vue.config.productionTip = false

Vue.use(ShopifyBuyPlugin,{
  domain: 'o-wool-stage.myshopify.com', // Insert your Shopify Domain
  storefrontAccessToken: 'c20015f58d86ebe8863bbf7c7e2993d9', // Insert your Shopify Storefront Access Token,
  checkoutStorageKey:'rrrrrr'
})
console.log("here",replaceCharacters("._.str!n_g_", ["!"]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
