import {Plugin} from "vue";
import {createPinia} from 'pinia'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {iStorefrontApiConfig} from "./../types";
import createApolloClient from "../apollo/client";
import PiniaOrm from 'pinia-orm'
export const gShopify: Plugin = {
    install(app, options: iStorefrontApiConfig) {
        const client = createApolloClient(options)
        app.provide(DefaultApolloClient, client)
        const pinia = createPinia().use(PiniaOrm.install())
        app.use(pinia)
    }
}
export default gShopify
