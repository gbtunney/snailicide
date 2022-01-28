import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import {
  initializeVuexOrmStore as gVueInitOrmFunction,
  registerAllVueConfigs,
  installVuePlugins,
  PluginRecord,
  Plugins,
} from "@snailicide/g-vue";
import { root_store, project_vue_config } from "./store/store.config";
import { getModuleList } from "./scripts/vuehelpers.js";
import mainConfig from "./main.config";

export const initializeVuexOrmStore = function (addl_options) {
  const store = gVueInitOrmFunction(root_store, addl_options);
  registerAllVueConfigs({ store, ...project_vue_config }, { ...addl_options });
  return store;
};

const additionalOptions = {
  logging: true,
  baseURL: "http://o-wool-stage.myshopify.com",
  domain: "o-wool-stage.myshopify.com", // Insert your Shopify Domain
  storefrontAccessToken: "c20015f58d86ebe8863bbf7c7e2993d9",
  // Insert your Shopify Storefront Access Token
};
const store = initializeVuexOrmStore(additionalOptions);
//registerAllVueConfigs(vue_project_config,{ store,...additionalOptions } )
/* * the settings for main app- includes things like components,directives,modules,plugins, aliases etc.
 * needs to go AFTER the root store is initialized* */

const app_config = {
  ...mainConfig,
  ...{
    store,
    options: {
      skipPlugins: false,
      checkoutStorageKey: "overridetest",
      logging: true,
      store,
    },
  },
};
registerAllVueConfigs(app_config, { store,...additionalOptions });
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
