import Vue from 'vue'
import App from './App.vue'
import router from './router'
import initStore from './store/index.js'
import './assets/tailwind.css'
import {replaceCharacters} from "@snailicide/g-library"
Vue.config.productionTip = false

alert()

//vue 2 create app plugin (mine)
//import { getVuexOrmDatabase } from "@snailicide/g-vue";
//gVueConfigPlugin
//shopify buy plugin (mine)
import {ShopifyBuyPlugin} from './modules/ShopifyBuy'

//************** Register ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from '@vuex-orm/plugin-change-flags';
import VuexORMSearch from "@vuex-orm/plugin-search";
//************** ORM Models  *****************//
import Models  from "./orm";

//console.log("GGIOIOIOIO",getVuexOrmDatabase)
/*
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
*/

const plugins = [
    [VuexORMAxios,{
        baseURL:  "http://google.com" }
    ],
    [VuexORMSearch,{
        caseSensitive: true,
        threshold: 0
    }],
    [VuexORMisDirtyPlugin,{
        isNewFlagName: 'IsNew',
        isDirtyFlagName: 'IsDirty',
        exposeFlagsExternally: false
    }]
]
import { Store } from 'vuex'

//const new_store = initStore( Models,plugins) as Store<any>

//console.log("here",new_store,replaceCharacters("._.str!n_g_", ["!"]))
/*
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
*/
