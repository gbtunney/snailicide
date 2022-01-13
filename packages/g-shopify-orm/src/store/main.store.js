import Vuex from "vuex";
import Vue from "vue";

/* * Custom Orm Register Plugin * */
import PluginOrm from "./../orm";

/* * Vuex Plugins * */
import { registerModels } from "../orm/database";
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

/* * Modules * */
import { Models } from "./../../src/orm/models";
import globalSettings from "../modules/globalSettings";
import ormmodule from "../modules/ormmodule";
import moduleProductLoader from "../modules/ProductLoaderModule";
import cartModule from "../modules/CartModule.ts";
import {ShopifyBuyModule} from "../modules/ShopifyBuy";
/* * Settings * */
import settings from "./../../settings.json";

const { LOCAL_STORAGE_KEY } = settings;

Vue.use(Vuex);
Vue.use(PluginOrm);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    global: globalSettings,
    orm: ormmodule,
    productloader:moduleProductLoader,
    shopifycart:cartModule,
    ShopifyBuy: ShopifyBuyModule
  },
  plugins: [
    createEasyAccess(),
    registerModels({
      models: Models,
    }),
    createPersistedState({
      key: LOCAL_STORAGE_KEY,
      storage: window.sessionStorage,
    }),
  ],
});
export default store;
