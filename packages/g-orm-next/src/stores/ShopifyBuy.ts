import {Plugin} from 'vue';
import {defineStore} from 'pinia'
import {useApolloLogging} from './../composable/useApolloLogging'
import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client/core'
import ShopifyBuy from 'shopify-buy'
import {DefaultApolloClient} from '@vue/apollo-composable'

export interface IShopifyBuyState {
    client: ApolloClient<any> | undefined,
    config: ShopifyBuy.Config | undefined
}

export interface IStoreFrontApiConfig extends ShopifyBuy.Config {
    domain: string;
    storefrontAccessToken: string;
    language?: string | undefined;
    version?: string
    logging?: boolean
}

export const gOrmNextPlugin: Plugin = {
    install(app, options: IStoreFrontApiConfig) {
        app.provide(DefaultApolloClient, createApolloClient(options))
    }
}
export const createApolloHttpLink = (payload: IStoreFrontApiConfig) => {
    return new HttpLink({
        uri: `https://${payload.domain}/api${(payload.version) ? `/${payload.version}` : `/`}/graphql.json`,
        headers: {'X-Shopify-Storefront-Access-Token': payload.storefrontAccessToken},
    });
}
export const createApolloClient = (payload: IStoreFrontApiConfig) => {
    return new ApolloClient({
        cache: new InMemoryCache(

        ),
        link: from([
            // useProductParsing(),
            useApolloLogging(payload.logging, payload.logging),
            createApolloHttpLink(payload)
        ])
    });
}

export const useShopifyBuy = defineStore('shopify-buy', {
    actions: {
        getProductByHandle(handle: string) {
            // const {result} = useQuery(productByHandle, {handle})
            return {}
        },
        buildClient(payload: ShopifyBuy.Config) {
            this.config = payload
        },
    },
    state: (): IShopifyBuyState => ({
        client: undefined,
        config: undefined
    }),
})
