import {createApp, h} from 'vue'
import App from './App.vue'
import router from './router'
import VuexORM from '@vuex-orm/core'
import {createPinia} from 'pinia'
import {createStore} from 'vuex'
import {gOrmNextPlugin} from './stores/ShopifyBuy'
import 'windi.css'

createApp({
    render: () => h(App),
})
    .use(gOrmNextPlugin, {
        domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.VUE_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
    })
    .use(createPinia())
    .use(createStore({
        plugins: [VuexORM.install()]
    }))
    .use(router)
    .mount('#app')
