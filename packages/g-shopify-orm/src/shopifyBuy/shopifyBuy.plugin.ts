/* * Shopify Buy Plugin - registers its own module. * */
import _Vue, {PluginObject} from "vue";
import ShopifyBuy from "shopify-buy";
import ShopifyBuyModule from "./ShopifyBuyModule";

export const ShopifyBuyPlugin: PluginObject<any> = {
    install(Vue: typeof _Vue, options?: ShopifyBuy.Config) {
        if (typeof options === "undefined") throw Error("Shopify Buy Plugin: Please provide the domain and storefront access token");
        debugger;
        console.log("plugin options!!!!" ,options, this)
        debugger;

       /* tempStore.registerModule('ShopifyBuy', ShopifyBuyModule)
        //store.dispatch('ShopifyBuy/invalidateCart')
        if (tempStore.hasModule(moduleName)) {
            tempStore.dispatch("ShopifyBuy/initClient", options);
            // const {checkoutKey:false}=options
            if (options["checkoutStorageKey"]) {
                tempStore.set(
                    `${moduleName}/checkoutStorageKey`,
                    options["checkoutStorageKey"]
                );
            }
            tempStore.dispatch("ShopifyBuy/getCart");
        }*/
    },
};
