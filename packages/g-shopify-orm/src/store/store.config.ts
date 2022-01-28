import axios from "axios";
/* * Import Types * */
import {Model} from "@vuex-orm/core";
import {VueRegistrationObject, VuexOrmStoreOptions} from "@snailicide/g-vue"

//************** Import ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";

/* * Custom Orm Register Plugin * */
import Models from  "./../orm";
import moduleProductLoader from "./../modules/ProductLoaderModule";
import ormmodule from "./../modules/ormmodule.js";
import {ModuleTree,ActionTree} from "vuex";
import newcart from "./../shopifyBuy/ShopifyBuyModule";
import {ShopifyBuyPlugin} from "./../shopifyBuy/shopifyBuy.plugin";

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
 * ORM Plugins
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
 * Modules   --these are only relevant to orm stuff
 */
const modules:ModuleTree<any> =  {
    orm: ormmodule,
    productloader: moduleProductLoader,
    shopifybuy:newcart
}

/**
 * Plugins ( VUEX PLUGINS )
 */
const plugins = []

/**Root Store Module
 * export
 */
 export const root_store:VuexOrmStoreOptions= {
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
export const project_vue_config:VueRegistrationObject= {
    alias: {
        axios: axios,
        " gbtShopify": "gbtShopify",
    },
    plugins: [
        [ShopifyBuyPlugin, {
            domain:false,// Insert your Shopify Domain
            storefrontAccessToken: false,
            store:false// Insert your Shopify Storefront Access Token
        }]
    ],
}
export default root_store
