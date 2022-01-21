
/* * Modules * */
//import globalSettings from "../modules/globalSettings.js";
import ormmodule from "../modules/ormmodule.js";
import moduleProductLoader from "../modules/ProductLoaderModule.js";
//import cartModule from "../modules/CartModule";
//import { ShopifyBuyModule } from "../modules/ShopifyBuy";
import ormmodule from "../modules/ormmodule.js";
import moduleProductLoader from "../modules/ProductLoaderModule.js";
    modules: {
      global: globalSettings,
      orm: ormmodule,
      productloader: moduleProductLoader,
      /*      shopifycart: cartModule,*/
      ShopifyBuy: ShopifyBuyModule,
    },


    //CHECKOUT_STORAGE_KEY
    /*
        const shopify = Shopify.init({
            domain: options.domain,
            storefrontAccessToken: options.storefrontAccessToken
        });
*/
    // (Vue as any).shopify = shopify.getClient()
    //  Vue.prototype.$shopify = shopify.getClient()
