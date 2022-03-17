import {createApp, h} from 'vue'
import App from './App.vue'
import About from './views/About.vue'
import router from './router'
import VuexORM from '@vuex-orm/core'
import {createPinia} from 'pinia'
import {createStore} from 'vuex'
import {gOrmNextPlugin} from './stores/ShopifyBuy'
import 'windi.css'
import {useApolloLogging} from "@/composable/useApolloLogging";

createApp({
    render: () => h(About),
})
    .use(gOrmNextPlugin, {
        domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        version: process.env.VUE_APP_SHOPIFY_STOREFRONT_VERSION,
        logging: process.env.VUE_APP_APOLLO_OPERATION_LOGGING
    })
    .use(createPinia())
    .use(createStore({
        plugins: [VuexORM.install()]
    }))
    .use(router)
    .mount('#app')
