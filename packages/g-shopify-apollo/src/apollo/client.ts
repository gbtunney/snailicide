import {ApolloClient, from} from "@apollo/client/core";

import {iStorefrontApiConfig} from "./../types";
import {cache, createApolloHttpLink, useApolloLogging} from ".";


export const createApolloClient = (payload: iStorefrontApiConfig) => {
    return new ApolloClient({
        cache,
        link: from([
            // useProductParsing(),
            useApolloLogging(payload.logging, payload.logging),
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
