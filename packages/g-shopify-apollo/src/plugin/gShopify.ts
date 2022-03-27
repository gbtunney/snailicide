import {Plugin} from "vue";
import {createPinia} from 'pinia'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {iStorefrontApiConfig} from "./../types";

import {createApolloClient} from './../apollo'

export const gShopify: Plugin = {
    install(app, options: iStorefrontApiConfig) {
        app.use(createPinia())
        app.provide(DefaultApolloClient, createApolloClient(options))
    }
}
export default gShopify
