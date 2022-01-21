import axios from "axios";

/* * Import Types * */
import {Model} from "@vuex-orm/core";

//************** Import ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";
import VuexORM from "@vuex-orm/core";

/* * Custom Orm Register Plugin * */
import Models from  "./../orm";
import globalSettingsModule from "@/modules/globalSettings";
import moduleProductLoader from "@/modules/ProductLoaderModule";

export type PlainObject = {
    [x: string]: any
    [y: number]: never
}

/**
 * VUEX ROOT STORE CONFIG
 */
/**
 * Options
 */
const options = {
    logging: true,
    persist_storage_key: "persistvuex",
    baseURL: "http://google.com",
}

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
const modules =  {
    global: globalSettingsModule,
    // orm: ormmodule,
    productloader: moduleProductLoader,
}

//import {PlainObject} from "@snailicide/g-library"

/**Root Store Module
 * export
 */

export const root_store= {
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
export default root_store
