import {Plugin} from "vue";
import {createPinia} from 'pinia'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {iStorefrontApiConfig} from "./../types";
import createApolloClient from "../apollo/client";
import {createStore} from 'vuex'
import VuexORM from '@vuex-orm/core'

export const gShopify: Plugin = {
    install(app, options: iStorefrontApiConfig) {
        const client = createApolloClient(options)
        app.provide(DefaultApolloClient, client)
        const vuex = createStore({plugins: [VuexORM.install()]})
        app.use(vuex)
        app.use(createPinia())
    }
}
export default gShopify
