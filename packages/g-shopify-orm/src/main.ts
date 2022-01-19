import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import {replaceCharacters} from "@snailicide/g-library"
Vue.config.productionTip = false

//vue 2 create app plugin (mine)
import gVueConfigPlugin from "@snailicide/g-vue"

//shopify buy plugin (mine)
import {ShopifyBuyPlugin} from './modules/ShopifyBuy'

const testconfig = {
  components : { "hello-world": HelloWorld,
    'styled-svg-wrapper':  StyledSvgWrapper
  },
  alias:  { " $tesTing": "i am a testttttttt",
    " gbtShopify": "gbtShopify"
  },
  directives:{
    'faker':vFaker
  },
  plugins:
      [[  ShopifyBuyPlugin,{
        domain: 'o-wool-stage.myshopify.com', // Insert your Shopify Domain
        storefrontAccessToken: 'c20015f58d86ebe8863bbf7c7e2993d9', // Insert your Shopify Storefront Access Token,
        checkoutStorageKey:'rrrrrr'
      }]]
  ,
  modules:{
    'gillian':{
      namespaced: true,
      state,
    }
  },
  store
}

console.log("here",replaceCharacters("._.str!n_g_", ["!"]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
