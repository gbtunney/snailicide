import Vuex from "vuex";
import Vue from "vue";
/* * Custom Orm Register Plugin * */
import { getVuexOrmDatabase } from "@snailicide/g-vue";

/* * Vuex Plugins * */
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

/* * Modules * */
import globalSettings from "../modules/globalSettings.js";
import ormmodule from "../modules/ormmodule.js";
import moduleProductLoader from "../modules/ProductLoaderModule.js";
//import cartModule from "../modules/CartModule";
import { ShopifyBuyModule } from "../modules/ShopifyBuy";

/* * Settings * */
import settings from "./../../settings.json";

const { LOCAL_STORAGE_KEY } = settings;

export const initStore = function (
  orm_models = [],
  orm_plugins = [],
  modules = {},
  options = { local_storage_key: "default_vuex" },
  boolPersistedState = true
) {
  const { local_storage_key = "default_vuex" } = options;
  const orm_options = {
    models: orm_models,
    plugins: orm_plugins,
  };
  const vuex_plugins = [
    createEasyAccess(),
    getVuexOrmDatabase(orm_options),
    ...(boolPersistedState
      ? [
          createPersistedState({
            key: local_storage_key,
            storage: window.sessionStorage,
          }),
        ]
      : []),
  ];
  Vue.use(Vuex);
  return new Vuex.Store({
    modules: {
      global: globalSettings,
      orm: ormmodule,
      productloader: moduleProductLoader,
      /*      shopifycart: cartModule,*/
      ShopifyBuy: ShopifyBuyModule,
    },
    plugins: vuex_plugins,
  });
};

export default initStore;
