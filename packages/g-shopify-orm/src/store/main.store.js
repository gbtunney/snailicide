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
import moduleProductLoader from "../modules/moduleProductLoader";
import ormmodule from "../modules/ormmodule";

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
    productloader: moduleProductLoader,
    orm: ormmodule,
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
