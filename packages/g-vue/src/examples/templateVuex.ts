import axios from "axios";
/* * Import Types * */
import {
  Modules,
  Plugins,
  Models,
  VuexInitializeOptions,
} from "./../types/_types";
/**
 * VUEX ROOT STORE CONFIG
 */

/**
 * Options
 */
const options: VuexInitializeOptions = {
 /* logging: true,
  persist_storage_key: "persistvuex",
  baseURL: "http://google.com",*/
};

/**
 * ORM Plugins
 */
const orm_plugins: Plugins = [];

/**
 * Vuex Orm Models
 */

const models: Models = []; //orm models like [Posts,Users]

/**
 * state
 */
const state = {};

/**
 * getters
 */
const getters = {};

/**
 * mutations
 */
const mutations = {};

/**
 * actions
 */
const actions = {};

/**
 * Modules   --these are only relevant to orm stuff
 */
const modules: Modules = {
  /*orm: ormmodule,
    productloader: moduleProductLoader,*/
};

/**
 * Plugins ( VUEX PLUGINS )
 */
const plugins = [];

//import {PlainObject} from "@snailicide/g-library"

/**Root Store Module
 * export
 */
export const root_store = {
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins,
  orm_plugins,
  models,
  options,
};
export default root_store;
