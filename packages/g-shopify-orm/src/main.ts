import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
import {initializeVuexOrmStore as gVueInitOrmFunction,registerAllVueConfigs} from "@snailicide/g-vue"
import {root_store} from "./store/store.config";
import {getModuleList}from './scripts/vuehelpers.js'

export const initializeVuexOrmStore = function ( addl_options ){
  return gVueInitOrmFunction( root_store,addl_options )
}

const additionalOptions = {logging:true,
  baseURL : "http://o-wool-stage.myshopify.com",
  domain: "o-wool-stage.myshopify.com",// Insert your Shopify Domain
  storefrontAccessToken: 'c20015f58d86ebe8863bbf7c7e2993d9',
  // Insert your Shopify Storefront Access Token
}
const store = initializeVuexOrmStore( additionalOptions )

/* * the settings for main app- includes things like components,directives,modules,plugins, aliases etc.
* needs to go AFTER the root store is initialized* */
import mainConfig from "./main.config";
const app_config ={... mainConfig,...{
  store,
    options:{
      skipPlugins:false,
      checkoutStorageKey:"overridetest",
      logging:true,
      store
    }
}}

 registerAllVueConfigs(app_config, { store,...additionalOptions });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
