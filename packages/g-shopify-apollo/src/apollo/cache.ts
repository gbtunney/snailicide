import {
    InMemoryCache,
    TypePolicies,
    gql,
    ReactiveVar,
    HttpLink,
    from,
    makeVar,
    makeReference,
    TypePolicy
} from '@apollo/client/core'
import {persistCache, LocalStorageWrapper} from 'apollo3-cache-persist';
import {iStorefrontApiConfig} from "./../types";
import {StrictTypedTypePolicies} from './../types/generated/apollo-helpers'
import {slugify} from "@snailicide/g-library";
import {
    Exact,
    Product, ProductNodeQuery,
    ProductOption, QueryRoot,ProductVariant
} from "@/types/generated/storefront-types";
import {StringKeyOf, Get, ValueOf,SetRequired,RequireExactlyOne} from 'type-fest';
import {
    FieldMergeFunction,
    FieldPolicy,
    FieldReadFunction,
    KeyFieldsFunction,FieldFunctionOptions,
    KeySpecifier
} from "@apollo/client/cache/inmemory/policies";

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
export type TProductOptionValueFragment = {

    __typename?: 'SelectedOption',
    type: 'SelectedOption',
    parent_handle: string,
    handle: string,
    title: string
};
export type ApiNodeTypes = Get<SetRequired<QueryRoot, "node">["__typename"], "node.__typename">
type TProduct =SetRequired<Product, "__typename">// Get<SetRequired<Product, "__typename">,"__typename">//Product["__typename"] ;

type TypenameRequired<T>  = T extends  {__typename:any } ? SetRequired<T, "__typename"> :never  //SetRequired<T, "__typename"> :never
type TTypePolicy<T> = T extends  Get<T,"__typename"> ? Get<T,"__typename">  :never
type CustomTypePolicyFields<T> =Record<keyof TTypePolicy<T>,{
    fields:Partial<Record<keyof T,FieldPolicy<T>>>
}>
import {parseGid} from '@shopify/admin-graphql-api-utilities';

const gid = (value:string):string=>{
    return atob(value)
}
const sid = (value:string):string=>{
    return parseGid(value)
}


interface ProductExtended extends Product{
    variant:ProductVariant|undefined
}
//: CustomTypePolicyFields<ProductExtended>
const testyyyyy={//CustomTypePolicyFields<ProductExtended>= {
    Product: {
        fields: {
            variant:{
                read(value:undefined,options:FieldFunctionOptions<ProductExtended>){
                    const variants :Get<ProductExtended,"variants">|undefined = options.readField("variants")
                    if ( variants && variants.edges ) { // && variants.edges?.length>0
                        if (variants.edges.length > 0) {
                            return variants.edges[0].node
                        }
                    }
                    return undefined// value

                }
            },
        }
    }
}

/*export  type CustomTypePolicy<T> = {
    fields?: CustomTypePolicyStart<Product>
};*/
//Omit<StrictTypedTypePolicies,"Query">

/*const policy:CustomTypePolicy<Product> = {

}*/


const typePolicies: TypePolicies = {

    ProductOption: {
        fields: {
            id: {
                read(value, options) {
                debugger;

                 console.log("options.field" ,options.field)
                   // const variants = value.edges.map((item) => item.node)
                   // return value.edges.map((item) => item.node)
                }
            },

        }
    },
}

export const useCache = (options: Pick<iStorefrontApiConfig, "persist">): { cache: InMemoryCache } => {
    const cache: InMemoryCache = new InMemoryCache({typePolicies:testyyyyy})

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

/*
ProductOption: {
    fields: {
        values: {
            read(value: ProductOption["values"], options) {
                const name: string | undefined = options.readField("name")
                if (name !== undefined) {
                    const values = value.map((_value) => {
                        return {
                            __typename: 'SelectedOption',
                            type: 'SelectedOption',
                            parent_handle: name,
                            handle: slugify(_value),
                            title: _value,

                            name: name,
                            value: _value
                        }
                    })
                    return values
                }
                return undefined
            }
        },
        isLoggedIn: {
            read() {
                return isLoggedInVar();
            }
        },
        name: {
            read(value, options) {
                console.log("FIELD", options.field)
                return value//"testtt"
            }
        },
        handle: {
            read(value: ProductOption, options) {
                const name: string | undefined = options.readField("name")
                if (name !== undefined) return slugify(name)
                return undefined
            }
        }
    }
},*/
