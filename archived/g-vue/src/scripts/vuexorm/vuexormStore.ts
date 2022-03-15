import * as R from "ramda";
import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";

/* * import types * */
import { VuexOrmStoreOptions,VuexInitializeOptions } from "./../../types/_types";
import { PlainObject } from "@snailicide/g-library";

/* * Vuex Plugins used for ORM projects * */
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

/* * Import internal functions * */
import { getVuexOrmDatabase, installVuePlugins } from "./..";

/**
 * initializeVuexOrmStore
 * @param {VuexOrmStoreOptions} store_options - StoreOptions with additional props
 * @param {VuexInitializeOptions} addl_options - options to override if nessecary
 * @return{Vuex.Store} - new Vuex.Store instance
 */
export const initializeVuexOrmStore = function (
  store_options: VuexOrmStoreOptions,
  addl_options: VuexInitializeOptions = {
    logging: false,
    persist: true,
    persist_storage_key: "default persist_storage_key initialize",
  }
) {
  Vue.use(Vuex);
  //extract only the part we want to modify.
  const {
    plugins = [],
    options: base_options = {}, //options to base options -- NOT A TYPE!!
    models = [],
    orm_plugins = [],
  } = store_options;
  const options = { ...base_options, ...addl_options }; //!!!!!!!!!!! merge options

  const { logging=true, persist, persist_storage_key }: VuexInitializeOptions =
    options;
  if (logging) console.log("the options registered are options",options)

  installVuePlugins(orm_plugins, options, VuexORM);

  const orm_database = getVuexOrmDatabase(models); //this is a vuex plugin withh a database instance
  if (logging) console.log("VuexOrmDatabase created:", orm_database);
  const vuex_plugins = [
    createEasyAccess(),
    orm_database,
    ...(persist
      ? [
          createPersistedState({
            key: persist_storage_key,
            storage: window.sessionStorage,
          }),
        ]
      : []),
    ...plugins,
  ];
  return new Vuex.Store({
    ...R.omit(["options", "plugins", "namespaced"], store_options),
    plugins: vuex_plugins,
  });
};
