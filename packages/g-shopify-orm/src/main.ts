import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

//import './styles/scss/tailwind.scss'
//import "./assets/windi.css"
//
import {initializeVuexOrmStore}from "@snailicide/g-vue"
import {root_store} from "@/store/store.config";
import {getModuleList}from './scripts/vuehelpers.js'

const store = initializeVuexOrmStore(root_store,{logging:true})
console.log("STORE",store, getModuleList(store) )

/* * the settings for main app- includes things like components,directives,modules,plugins, aliases etc.
* needs to go AFTER the root store is initialized* */
//import mainConfig from "./main.config";

/* * Custom App Register Plugin * */
//import gVueConfigPlugin from "@snailicide/g-vue";
//Vue.use(gVueConfigPlugin, mainConfig(true));

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
