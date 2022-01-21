import Vuex from "vuex";
import Vue from "vue";
import {
  Store
} from "vuex";
/* * Custom Orm Register Plugin * */
import { getVuexOrmDatabase } from "@snailicide/g-vue";

/* * Vuex Plugins * */
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

/* * Settings * */
//import settings from "./../../settings.json";
import {Option, StoreInit} from "./store.config";
import _Vue from "vuex/types/vue";

//export declare function install(Vue: typeof _Vue): void;

const  LOCAL_STORAGE_KEY  = "no";

//internal store instance


const  _store :Store<any>= new Vuex.Store({})


/*
 interface VuexOptions  {
  logging:boolean
  persist
}
*/


/*
let root = {
  initialize: function (...args) {
    this.store = initStore(...args);
    return this.store;
  },
  get store() {
    return _store;
  },
  set store(value) {
    _store = value;
  },
};*/
const initStore2 = function (
  orm_models = [],
  orm_plugins = [],
  modules = {},
  options = {logging:true, local_storage_key: "default_vuex" },
  boolPersistedState = true
) {
  const { local_storage_key = "---default_vuex",  logging=false } = options;
  const orm_options = {
    models: orm_models,
    plugins: orm_plugins,
    logging
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
    modules: {...modules},
    plugins: vuex_plugins,
  });
};

export default _store;
