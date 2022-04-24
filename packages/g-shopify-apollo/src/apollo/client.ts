import {ApolloClient, from, gql} from "@apollo/client/core";
/* * Project Imports  * */
import {createApolloHttpLink, useApolloLogging} from ".";
import {iStorefrontApiConfig} from "./../types";
import parseDataLink from "./parseServerData";

const typeDefs = gql`
    extend input VariantOptionFilter {
        index:Int!
    }
`
//const typeDefs = TestmessageDocument
export const createApolloClient = (payload: iStorefrontApiConfig) => {
    return new ApolloClient({
        typeDefs,
        cache: payload.cache,
        defaultOptions: {
            query:{
                fetchPolicy:'cache-only'
            }
        },
        link: from([
            useApolloLogging(payload.logging, payload.logging),
            parseDataLink,
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
