import {ApolloClient, from, gql} from "@apollo/client/core";
import {iStorefrontApiConfig} from "./../types";
import {useCache, createApolloHttpLink, useApolloLogging} from ".";
import {cleanBooleanType} from "@snailicide/g-library";
import {ProductOptionFragmentDoc, ProductOptionValueFragmentDoc} from './../types/generated/storefront-types'

// await before instantiating ApolloClient, else queries might run before the cache is persisted
const typeDefs = gql`
    extend type ProductOption {
        gid: String
        test:String
        handle:String
        isLoggedIn:Boolean!
    }
`
export const createApolloClient = (payload: iStorefrontApiConfig) => {
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
        //sresolvers:
        typeDefs,
        cache,

        link: from([
            useApolloLogging(payload.logging, payload.logging),
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
