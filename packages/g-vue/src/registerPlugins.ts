import Vue, { VueConstructor } from "vue";
import Vuex from "vuex";
import * as R from "ramda";
import * as RA from "ramda-adjunct";
import { mergeOptions } from "@snailicide/g-library";
import VuexORM, { VuexORM as VuexORMType } from "@vuex-orm/core";

import { registerOrmPlugins, getVuexOrmDatabase } from "./orm";

/* * Import Types * */
import { PlainObject, VuexOrmStoreOptions } from "./_types";

/* * Vuex Plugins * */
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

export const registerPlugins = function (
  _plugins: Array<any> = [],
  options: PlainObject = {},
  target: VueConstructor | VuexORMType = Vue
) {
  const { logging = false } = options;
  return _plugins.forEach(function (_plugin) {
    const [_pluginItem = false, _plugin_options = {}] = RA.ensureArray(_plugin);
    const merged_options = mergeOptions(
      _plugin_options,
      options as PlainObject
    );
    if (_pluginItem === false) return false;
    const log = `Plugin Registered: target: ${typeof target}options before: ${JSON.stringify(
      _plugin_options
    )} before: ${merged_options}`;
    target.use(_pluginItem, _plugin_options);
    if (logging) console.log(log);
  });
};

export const initializeVuexOrmStore = function (
  store_options: VuexOrmStoreOptions,
  addl_options: PlainObject = {}
) {
  Vue.use(Vuex);
  //extract only the part we want to modify.
  const {
    plugins = [],
    options: base_options = {},
    models = [],
    modules = {},
    orm_plugins = [],
  } = store_options;

  const options = { ...base_options, ...addl_options };
  const {
    logging = false,
    persist = true,
    persist_storage_key = "no persist storage key set.",
  } = options;
  // console.log("addl_options",addl_options,"options",options,logging)
  registerPlugins(orm_plugins, options, VuexORM);

  const vuex_plugins = [
    createEasyAccess(),
    getVuexOrmDatabase({ models, logging }),
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
