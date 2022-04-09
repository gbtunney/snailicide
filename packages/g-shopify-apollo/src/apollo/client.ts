import {ApolloClient, from, gql} from "@apollo/client/core";
import {
    InMemoryCache,

} from '@apollo/client/core'
import {iStorefrontApiConfig} from "./../types";
import {useCache, createApolloHttpLink, useApolloLogging} from ".";
import {ProductOptionFragmentDoc, ProductOptionValueFragmentDoc} from './../types/generated/storefront-types'
import cache from "@/apollo/cache";
// varianttest(
//             "Identifier for the metafield (maximum of 30 characters)."
//             index: Int!,
//
//         ): ProductVariant
// await before instantiating ApolloClient, else queries might run before the cache is persisted
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
    type Person {
        name: String!
    }
    extend type Person {
        salary: Int
    }
    extend type QueryRoot {
        person: Person
    }
    query person{
        person {
            name
            __typename
            salary
        }
    }
    type ProductOptionValue {
        id:ID
        handle: String
        parent_handle: String
        option: ProductOption
        title: String
    }
    extend type QueryRoot {
        testing(index:Int) : String
    }
    extend type Product {
        testing(index:Int!) : String
    }
    extend type ProductOption {
        testing(index:Int!) : String
    }
`
export const createApolloClient =  (payload: iStorefrontApiConfig) => {
    return new ApolloClient({
        typeDefs,
        cache: payload.cache,
        link: from([
            useApolloLogging(payload.logging, payload.logging),
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
