import { ShopifyBuyPlugin } from "./modules/ShopifyBuy";
import axios from "axios";
import root_store from "./store";

/* * Modules * */
import globalSettingsModule from "./modules/globalSettings.js";
import ormmodule from "./modules/ormmodule.js";
import moduleProductLoader from "./modules/ProductLoaderModule.js";

export const config = function (logging = false) {
  const store = root_store.store;
  return {
    store,
    logging: logging,
    components: {},
    alias: {
      axios: axios,
      " gbtShopify": "gbtShopify",
    },
    directives: {},
    modules: {
      productloader: moduleProductLoader,
      global: globalSettingsModule,
    },
    plugins: [
      [
        ShopifyBuyPlugin,
        {
          domain: "o-wool-stage.myshopify.com", // Insert your Shopify Domain
          storefrontAccessToken: "c20015f58d86ebe8863bbf7c7e2993d9", // Insert your Shopify Storefront Access Token,
          checkoutStorageKey: "rrrrrr",
        },
      ],
    ],
  };
};
export default config;
