import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VuexORM from '@vuex-orm/core'
import {createPinia} from 'pinia'
import {createStore} from 'vuex'
import {useShopifyBuy} from './stores/ShopifyBuy'

createApp(App)
    .use(createPinia())
    .use(createStore({
        plugins: [VuexORM.install()]
    }))
    .use(router)
    .mount('#app')
useShopifyBuy().buildClient({
    domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
})
