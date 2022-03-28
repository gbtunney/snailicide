import {Plugin} from "vue";
import {createPinia} from 'pinia'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {iStorefrontApiConfig} from "./../types";
import createApolloClient from "../apollo/client";

export const ApolloApp = async (app: any, options: iStorefrontApiConfig) => {
    return new Promise((resolve, reject) => {
        /*const client =   createApolloClient(options).then(()=>{
            console.log("clienttttttt",client,app )
            app.provide(DefaultApolloClient, client)
            app.use(createPinia())
            resolve(client);
        })*/
    });
}
export const gShopify: Plugin = {
    install(app, options: iStorefrontApiConfig) {
        const client = createApolloClient(options)
        app.provide(DefaultApolloClient, client)
        app.use(createPinia())
    }
}
export default gShopify
