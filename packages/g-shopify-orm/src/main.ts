import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import './styles/scss/tailwind.scss'
//import "./assets/windi.css"
Vue.config.productionTip = false;

import root_store from "./store";

/* * Vuex ORM config.
* this is VuexOrm plugins only and modules to be added to root vuex store* */
import vuexConfig from "./orm.config";

/* * Initialize and get root store * */
const store = root_store.initialize(...vuexConfig);

/* * the settings for main app- includes things like components,directives,modules,plugins, aliases etc.
* needs to go AFTER the root store is initialized* */
import mainConfig from "./main.config";

//todo: need to implement somehow.
const logging = true;
console.log("Module list::::", store._modules.root._children);

/* * Custom App Register Plugin * */
import gVueConfigPlugin from "@snailicide/g-vue";
Vue.use(gVueConfigPlugin, mainConfig(true));

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
