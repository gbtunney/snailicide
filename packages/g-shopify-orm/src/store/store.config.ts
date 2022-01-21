import * as R from "ramda"
import * as RA from "ramda-adjunct"
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

/* * Import Types * */
import { StoreOptions } from "vuex";
import {PluginObject} from "vue";
import {Model} from "@vuex-orm/core";

//************** Import ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";
import VuexORM from "@vuex-orm/core";

/* * Custom Orm Register Plugin * */
import Models from "./../orm";
import { getVuexOrmDatabase } from "@snailicide/g-vue";
import {mergeOptions} from '@snailicide/g-library'

/* * Vuex Plugins * */
import createEasyAccess from "vuex-easy-access";
import createPersistedState from "vuex-persistedstate";

export type PlainObject = {
    [x: string]: any
    [y: number]: never
}
export interface PluginItem {
    [0]: PluginObject<any>;
    [1]: PlainObject;
}

/**
 * VUEX ROOT STORE CONFIG
 */
/**
 * Options
 */
const options = {}

/**
 * Plugins
 */
const orm_plugins= [
    [VuexORMAxios,
        {
            axios,
            baseURL: false,
        },
    ],
    // VuexORMSearch,
    [VuexORMSearch,
        {
            caseSensitive: true,
            threshold: 0,
        },
    ],
    [VuexORMisDirtyPlugin,
        {
            isNewFlagName: "IsNew",
            isDirtyFlagName: "IsDirty",
            exposeFlagsExternally: false,
        },
    ],
];

/**
 * Vuex Orm Models
 */

const models :Array<Model>= Models

/**
 * state
 */
const state = {}

/**
 * getters
 */
const getters = {}

/**
 * mutations
 */
const mutations={}

/**
 * actions
 */
const actions = {}

/**
 * Plugins ( VUEX PLUGINS )
 */
const plugins = []

/**
 * Modules
 */
const modules = {}

//import {PlainObject} from "@snailicide/g-library"

/**Root Store Module
 * export
 */
export interface VuexStoreOptions extends StoreOptions<any> {
    options?: PlainObject;
    orm_plugins?: Array<PluginItem> | Array<Array<PluginItem>> ;
    models? :Array<Model>;
}
export const root_store:VuexStoreOptions= {
    state,
    getters,
    mutations,
    actions,
    modules,
    plugins,
    orm_plugins,
    models,
    options
}

export const mergePluginOptions = function (
    _plugins :Array<any> = [],
    options: PlainObject ={}
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
export const initializeStore = function (store_options :VuexStoreOptions, addl_options:PlainObject={}){
    Vue.use(Vuex);

    //extract only the part we want to modify.
    const { plugins =[],
        options:base_options={},
        models=[],
        modules={},
        orm_plugins=[]
        }=store_options

    const options = { ...base_options,...addl_options}
    const {logging = false,persist=true ,persist_storage_key="no persist storage key set." } = options

   const mergedOrmPlugins =mergePluginOptions(orm_plugins,options)
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
        ...plugins
    ];
    return new Vuex.Store({
        ...R.omit(['options','plugins','namespaced'],store_options),
        plugins: vuex_plugins,
    });
}

