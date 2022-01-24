//mport { ShopifyBuyPlugin } from "./shopifyBuy/shopifyBuy.plugin";
//import { ShopifyBuyModule } from "./shopifyBuy/ShopifyBuyModule";

import axios from "axios";
//import store from "./store";

/* * Modules * */
import globalSettingsModule from "./modules/globalSettings.js";
import {PluginPatternlab}from "@snailicide/g-patternlab"
import {ModuleTree} from "vuex";

import vSelect from 'vue-select'
//import Shopify from "./stolenScript";

const modules:ModuleTree<any> =  {
    global: globalSettingsModule,
}

//const store = store;
export const config =  {
    options:{
      checkoutStorageKey:"overriding!!"
    },
    components: {'v-select': vSelect},
    alias: {
      axios: axios,
      " gbtShopify": "gbtShopify",
    },
    directives: {},
    modules,
   plugins: [
       [PluginPatternlab, { pluginoptions: "fffgg" }],
       /*[VueShopifyBuy, {
           domain:false,// Insert your Shopify Domain
           storefrontAccessToken: false, // Insert your Shopify Storefront Access Token
       }]*/
    ],
};
export default config;
