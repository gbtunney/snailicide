import {ApolloClient, from, gql, InMemoryCache} from "@apollo/client/core";
/* * Project Imports  * */
import {createApolloHttpLink, useApolloLogging} from ".";
import {iStorefrontApiConfig} from "./../types";
import parseDataLink from "./parseServerData";


//import typeDefs from './../graphql/client.schema.graphql'

//THE CACHE BREAKS, BC ANY @CLIENT directive will make it repull from the server.....UGH
export const createApolloClient = (payload: iStorefrontApiConfig) => {
    return new ApolloClient({
       // typeDefs,
        cache: payload.cache,
        link: from([
            useApolloLogging(payload.logging, payload.logging),
            parseDataLink,
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
