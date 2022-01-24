import { ShopifyBuyPlugin } from "./modules/ShopifyBuy";
import axios from "axios";
//import store from "./store";

/* * Modules * */
import globalSettingsModule from "./modules/globalSettings.js";
import ormmodule from "./modules/ormmodule.js";
import moduleProductLoader from "./modules/ProductLoaderModule.js";
import {PluginPatternlab}from "@snailicide/g-patternlab"
import {ModuleTree} from "vuex";
//plugins: [[PluginPatternlab, { pluginoptions: "fffgg" }]],
//import {VueRegistrationObject} from "@snailicide/g-vue/src";

const modules:ModuleTree<any> =  {
    global: globalSettingsModule,
    productloader: moduleProductLoader,
}

//const store = store;
export const config =  {
    options:{
      checkoutStorageKey:"overriding!!"
    },
    components: {},
    alias: {
      axios: axios,
      " gbtShopify": "gbtShopify",
    },
    directives: {},
    modules,
    plugins: [[PluginPatternlab, { pluginoptions: "fffgg" }]],
   /* plugins: [
      [
        ShopifyBuyPlugin,
        {
          domain: "o-wool-stage.myshopify.com", // Insert your Shopify Domain
          storefrontAccessToken: "c20015f58d86ebe8863bbf7c7e2993d9", // Insert your Shopify Storefront Access Token,
          checkoutStorageKey: "rrrrrr",
        },
      ],
    ],*/
};
export default config;
