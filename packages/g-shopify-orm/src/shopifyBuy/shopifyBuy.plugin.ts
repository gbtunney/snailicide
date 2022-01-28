/* * Shopify Buy Plugin - registers its own module. * */
import _Vue, {PluginObject} from "vue";
import ShopifyBuy from "shopify-buy";
import {EasyAccessStore} from "@snailicide/g-vue"

interface ShopifyBuyPlugin extends ShopifyBuy.Config{
    store: EasyAccessStore
}

export const ShopifyBuyPlugin: PluginObject<any> = {
    async install(Vue: typeof _Vue, options?: ShopifyBuyPlugin) {
        if (typeof options === "undefined") throw Error("Shopify Buy Plugin: Please provide the domain and storefront access token");
        const {store, domain,storefrontAccessToken} = options
        store.dispatch( 'shopifybuy/init',options )
        const test = await store.dispatch('shopifybuy/getCart')
        const eastore = store as EasyAccessStore
    },
};
export default ShopifyBuyPlugin
