import { createApp } from 'vue'
import App from './App.vue'
import gShopify from './plugin/gShopify'

createApp(App)
    .use(gShopify, {
        domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        version: process.env.VUE_APP_SHOPIFY_STOREFRONT_VERSION,
        logging: process.env.VUE_APP_APOLLO_OPERATION_LOGGING
    })
    .mount('#app')
