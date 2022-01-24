import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

//import './styles/scss/tailwind.scss'
//import "./assets/windi.css"
//
import {gVueRegisterAll,initializeVuexOrmStore as gVueInitOrmFunction,registerAllVueConfigs} from "@snailicide/g-vue"
import {root_store} from "./store/store.config";
import {getModuleList}from './scripts/vuehelpers.js'

export const initializeVuexOrmStore = function ( addl_options ){
  return gVueInitOrmFunction( root_store,addl_options )
}

const store = gVueInitOrmFunction(root_store,{logging:true,
  baseURL : "http://override.com"})

console.log("STORE",store,"store object", root_store ,getModuleList(store) )

/* * the settings for main app- includes things like components,directives,modules,plugins, aliases etc.
* needs to go AFTER the root store is initialized* */
import mainConfig from "./main.config";

const app_config ={... mainConfig,...{
  store,
    checkoutStorageKey:"overridetest",
      logging:true
}}

 registerAllVueConfigs(app_config)
/* * Custom App Register Plugin * */
//import gVueRegisterAll from "@snailicide/g-vue";

//Vue.use(gVueRegisterAll, app_config);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
