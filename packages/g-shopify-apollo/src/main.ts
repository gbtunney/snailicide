import {createApp} from 'vue'
import App from './App.vue'
import {gShopify} from './plugin/gShopify'
import {iStorefrontApiConfig} from "./types";
import {cleanBooleanType} from "@snailicide/g-library";

const options: iStorefrontApiConfig = {
    domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    version: process.env.VUE_APP_SHOPIFY_STOREFRONT_VERSION,
    persist: process.env.VUE_APP_APOLLO_PERSIST_CACHE, //todo: these env variables come in as strings :(
    logging: process.env.VUE_APP_APOLLO_OPERATION_LOGGING
}
createApp(App)
    .use(gShopify, options)
    .mount('#app')
