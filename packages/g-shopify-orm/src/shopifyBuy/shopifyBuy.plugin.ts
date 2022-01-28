/* * Shopify Buy Plugin - registers its own module. * */
import _Vue, {PluginObject} from "vue";
import ShopifyBuy from "shopify-buy";
import {Store} from "vuex";

interface ShopifyBuyPlugin extends ShopifyBuy.Config{
    store: Store<any>
}

export const ShopifyBuyPlugin: PluginObject<any> = {
    async install(Vue: typeof _Vue, options?: ShopifyBuyPlugin) {
        if (typeof options === "undefined") throw Error("Shopify Buy Plugin: Please provide the domain and storefront access token");

        const {store, domain,storefrontAccessToken} = options
        store.dispatch( 'shopifybuy/init',options )

        const test = await store.dispatch('shopifybuy/getCart')
        console.log("pget cart" ,test, this)
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
