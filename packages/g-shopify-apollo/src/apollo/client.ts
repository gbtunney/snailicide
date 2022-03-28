import {ApolloClient, from, gql, InMemoryCache} from "@apollo/client/core";
import {iStorefrontApiConfig} from "./../types";
import {useCache, createApolloHttpLink, useApolloLogging} from ".";
import {ProductOptionValueFragmentDoc} from './../types/generated/storefront-types'
import {cleanBooleanType} from "@snailicide/g-library";

// await before instantiating ApolloClient, else queries might run before the cache is persisted
const typeDefs = ProductOptionValueFragmentDoc
export const createApolloClient = async (payload: iStorefrontApiConfig) => {
    const {cache} = useCache({persist: payload.persist})
    /* return new Promise((resolve, reject) => {
        useCache({persist: payload.persist}).then((cache) => {
            const client = new ApolloClient({
                typeDefs,
                cache: cache,
                link: from([
                    useApolloLogging(payload.logging, payload.logging),
                    createApolloHttpLink(payload)
                ])
            });
            resolve(client);
        })
    });*/
    return new ApolloClient({
        typeDefs,
        cache,
        link: from([
            useApolloLogging(payload.logging, payload.logging),
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
