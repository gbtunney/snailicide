import {createApp} from 'vue'
import {cleanBooleanType} from "@snailicide/g-library";
import {LocalStorageWrapper, persistCache} from "apollo3-cache-persist";
import {useCache} from "./apollo";
import App from './App.vue'
import {gShopify} from './plugin/gShopify'
import {iStorefrontApiConfig} from "./types";

const options: iStorefrontApiConfig = {
    domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    version: process.env.VUE_APP_SHOPIFY_STOREFRONT_VERSION,
    persist: cleanBooleanType(process.env.VUE_APP_APOLLO_PERSIST_CACHE) as boolean, //todo: these env variables come in as strings :(
    logging: process.env.VUE_APP_APOLLO_OPERATION_LOGGING,
    cache: useCache()
}
const mountApp = (options: iStorefrontApiConfig) => {
    createApp(App)
        .use(gShopify, options)
        .mount('#app')
}
if (options.persist) {
    persistCache({
        cache: options.cache,
        storage: new LocalStorageWrapper(window.localStorage),
    }).then(() => {
        if (options.cache) {
            console.warn("calling   option", options.cache)
            mountApp(options)
        }
    })
} else {
    console.warn("calling no promise      option")
    mountApp(options)
}
