//************** Register ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";
import VuexORM,{Model} from "@vuex-orm/core";
import axios from "axios";

import globalSettingsModule from "./../src/modules/globalSettings.js";
import ormmodule from "./../src/modules/ormmodule.js";
import moduleProductLoader from "./../src/modules/ProductLoaderModule.js";
import {Module, ModuleOptions, ModuleTree, Plugin} from "vuex";
import {Option, PlainObject, PluginItem} from "./store/store.config"

/**
 * Modules
 */
const modules:ModuleTree<Module<string,ModuleOptions>> = {
  global: globalSettingsModule,
  // orm: ormmodule,
  productloader: moduleProductLoader,
}
/**
 * Options
 */
const options:Option = {
  logging: true,
  persist_storage_key: "persistvuex",
  baseURL: "http://google.com",
}

/**
 * Plugins
 */
//const test : Array<Array<any>> | Array<any>=VuexORMSearch
const plugins:Array<Array<any>> | Array<any> = [
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
import Models from "./orm";
const models :Array<Model>= Models

//const _plugins = plugins as Array<Plugin<PluginItem>>
const store_options = {
  models,
  plugins,
  modules,
  options
}

//const options =  [models, plugins, modules];
export default store_options
