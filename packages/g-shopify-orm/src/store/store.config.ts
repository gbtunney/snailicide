import {
    Module,
    ModuleTree,
    ModuleOptions,
    ActionTree,
    GetterTree,
    MutationTree,
    Action,
    Plugin,
    StoreOptions,
    Store, Payload
} from "vuex";
import Vue from "vue";
import Vuex from "vuex";

/* * Custom Orm Register Plugin * */
import { getVuexOrmDatabase } from "@snailicide/g-vue";

/* * Vuex Plugins * */
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

///just a boring key / value object
export interface Option {
    [key: string]: any
}
export type PlainObject = {
    [x: string]: any
    [y: number]: never
}
export interface StoreInit extends StoreOptions<any> {
    options: Option;
}
export interface PluginItem {
    [0]: Plugin<any>;
    [1]: PlainObject;
}

/**
 * VUEX ROOT STORE CONFIG
 */
/**
 * Options
 */
const options:Option = {}

/**
 * Plugins
 */
const plugins:Array<Plugin<PluginItem>> = []

/**
 * Modules
 */
const modules:ModuleTree<Module<string,ModuleOptions>> = {}

/**
 * state
 */
const state:Record<string, any> = {}

/**
 * getters
 */
const getters :GetterTree<any, any>= {}

/**
 * mutations
 */
const mutations:MutationTree<any> = {}

/**
 * actions
 */
const actions:ActionTree<string, Action<any,any>> = {}


import * as R from "ramda"
import * as RA from "ramda-adjunct"
import _Vue from "vuex/types/vue";
import {Model} from "@vuex-orm/core";
//import {PlainObject} from "@snailicide/g-library"


export const mergeOptions = function (
  base_options: PlainObject = {},
  override_options:PlainObject ={},// Record<string, any> = {},
  logging = false,
  remove_false = true
):  Record<string, any> {
  const keys: Array<string> = Array.from(Object.keys(base_options));
  if (logging) console.log("keys ", keys);
  const relevant_override_options: Option = R.pick(keys, override_options);
  if (logging)
    console.log("relevant_override_options ", relevant_override_options);
  const merged_options: Option = {
    ...base_options,
    ...relevant_override_options,
  };
  if (logging) console.log("merged_options ", merged_options);
  const result = !remove_false
    ? R.filter((n) => n !== false, merged_options)
    : merged_options;
  if (logging) console.log("result ", result);
  return result;
};

/**Root Store Module
 * export
 */
export const root_store:StoreInit= {
    state,
    getters,
    mutations,
    actions,
    modules,
    plugins,
    options,
}

export interface InitObject extends StoreOptions<any> {
    options: Option;
    plugins:Array<any>;
    models :Array<Model>;
    modules:ModuleTree<Module<string,ModuleOptions>>
}

export const mergePluginOptions = function (
    _plugins :Array<Array<PluginItem>> = [],
    options: Option ={}
){
   return  _plugins.map(function( _plugin ){
        console.log(_plugin , "is areray " , RA.isArray(_plugin))
        const _pluginarr = RA.ensureArray( _plugin )
const [ _pluginItem = false, _plugin_options={} ]  = _pluginarr
        if (_pluginItem ===false ) return false
        const merged_options = mergeOptions(_plugin_options,options as PlainObject)
        return [_pluginItem,merged_options]
      //  console.log( "_pluginItem",merged_options , "_plugin_options",_plugin_options,"override ",options)
    })
}
export const initializeStore = function (_store :InitObject){
    Vue.use(Vuex);
    //extract only the part we want to modify.
    const { plugins =[],
        options={},
        models=[],
        modules={}
        }=_store
    const {logging = false,persist=true ,persist_storage_key="no persist storage key set." } = options

   const mergedOrmPlugins =mergePluginOptions(plugins,options)
    console.log("merrrrgedd",mergedOrmPlugins )
    const vuex_plugins = [
      createEasyAccess(),
      getVuexOrmDatabase({models, logging }),
      ...(persist
        ? [
            createPersistedState({
              key: persist_storage_key,
              storage: window.sessionStorage,
            }),
          ]
        : []),
    ];
    return new Vuex.Store({
        ...R.omit(['options','namespaced'],_store),
        plugins: vuex_plugins,
    });
}

