import {InMemoryCache, TypePolicies ,gql, HttpLink, from, makeVar, makeReference} from '@apollo/client/core'
import {persistCache, LocalStorageWrapper} from 'apollo3-cache-persist';
import {isDefined, Guard} from '@gabrielurbina/type-guard'
import {iStorefrontApiConfig} from "./../types";
import { StrictTypedTypePolicies } from './../types/generated/apollo-helpers'
import {slugify} from "@snailicide/g-library";

type Policdddies = TypePolicies[""]

type Policies = Pick<StrictTypedTypePolicies,"Product">


const typePolicies:TypePolicies = {
    // Keys in this object will be validated against the types on your schema
    Product: {
        keyFields: ['id'] ,// Values in this field will be validated against the available fields from the Product type
        fields: {
            title: {
                read(value, options) {
                    return value//makeVar(value);
                }
            },
        },
    },
    SelectedOption: {
        fields: {
            parent_handle: {
                read(value, options) {
                    console.error("valyyyyy red ",  options.readField(value))
                    return slugify(value)//makeVar(value);
                }
            },
        },
    },
    Query:{
        fields:{
            productByHandle:{
                read(product, options) {
                  console.log("identitttt",makeVar(product)) // product.valueOf()


                }
            }
        }
    }
}

export const useCache = (options: Pick<iStorefrontApiConfig, "persist">): { cache: InMemoryCache } => {
    const cache: InMemoryCache = new InMemoryCache({typePolicies})

    const broke = new Promise<InMemoryCache>((resolve) => {
        if (!options.persist) {
            const persistedComplete = persistCache({
                cache,
                storage: new LocalStorageWrapper(window.localStorage),
            }).then(() => {
                resolve(cache)
            })
        } else resolve(cache)
    });
    return {cache}
}
export default useCache
