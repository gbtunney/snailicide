import {ApolloClient, from, gql} from "@apollo/client/core";
import {iStorefrontApiConfig} from "./../types";
import {useCache, createApolloHttpLink, useApolloLogging} from ".";
import {DirectiveLink} from "apollo-link-directive";
import {ApolloLink, Operation, NextLink} from '@apollo/client/core';

const functionToUppercase = (value: string) => {
    return (value).toUpperCase()
}
const adminDirectiveLink: unknown = new DirectiveLink(
    [{
        directive: 'uppercase',
        callback: (operation: Operation, _forward: NextLink) => {
            console.log("uppercase directive called!!!!!!!!", operation)
            return operation.setContext({uppercase: functionToUppercase})
        }
    }]
);

const typeDefs = gql`
    extend input VariantOptionFilter {
        index:Int!
    }
    query gillianTest($handle: String!, $index:Int!) {
        productByHandle(handle: $handle) {
            variantBySelectedOptions(selectedOptions:$selectedOptions){
                ...ProductVariantFragment
            }
        }
    }
`
//const typeDefs = TestmessageDocument
export const createApolloClient = (payload: iStorefrontApiConfig) => {
    return new ApolloClient({
        typeDefs,
        cache: payload.cache,
        link: from([
            adminDirectiveLink as ApolloLink,
            useApolloLogging(payload.logging, payload.logging),
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
