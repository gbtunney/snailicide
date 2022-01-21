import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

//import './styles/scss/tailwind.scss'
//import "./assets/windi.css"
//
import {mergeOptions,initializeStore} from "@/store/store.config";
import store_options from './orm.config'

//import root_store from "./store";


const store = initializeStore(store_options)
console.log("STORE",store)
const origObj = {
  hello:false,
  testing: "value1",
  testing2: "value2"
}

const optionObj = {
  hello:"hello i am gillian!!!!!",
  testing: "value1-- OVERRIDE!!",
  irrelavent:"option from a diff plugin"
}

console.log("testinnnnnnnnnnnnnn",mergeOptions(origObj, {} ))



/* * Vuex ORM config.
* this is VuexOrm plugins only and modules to be added to root vuex store* */
//import vuexConfig from "./orm.config";

/* * Initialize and get root store * */
//const store = root_store.initialize(...vuexConfig);

/* * the settings for main app- includes things like components,directives,modules,plugins, aliases etc.
* needs to go AFTER the root store is initialized* */
//import mainConfig from "./main.config";

//todo: need to implement somehow.
//const logging = true;
//console.log("Module list::::", store._modules.root._children);

/* * Custom App Register Plugin * */
//import gVueConfigPlugin from "@snailicide/g-vue";
//Vue.use(gVueConfigPlugin, mainConfig(true));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
