import {
    InMemoryCache,
    gql,
    ReactiveVar,
    HttpLink,
    from,
    makeVar,
    makeReference,

} from '@apollo/client/core'
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';

import {persistCache, LocalStorageWrapper} from 'apollo3-cache-persist';
import {iStorefrontApiConfig} from "./../types";
import {ProductFieldPolicy, StrictTypedTypePolicies} from './../types/generated/apollo-helpers'
import {slugify} from "@snailicide/g-library";
import {
    Exact,
    Product, ProductNodeQuery,ProductVariantConnection,
    ProductOption, QueryRoot,ProductVariant
} from "@/types/generated/storefront-types";
import {StringKeyOf, Get, ValueOf,SetRequired,RequireExactlyOne} from 'type-fest';
import {
    FieldMergeFunction,
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

import {parseGid} from '@shopify/admin-graphql-api-utilities';

const gid = (value:string):string=>{
    return atob(value)
}
const sid = (value:string):string=>{
    return parseGid(gid(value))
}
/*interface ProductSpecial {
    variant:FieldReadFunction<any,Record<"index", number>>
    Variants: FieldReadFunction<ProductVariantConnection,ProductVariant[]|undefined>
}*/

interface ProductExtended extends Product{
    variant:ProductVariant|undefined
    Variants: ProductVariant[]//FieldReadFunction<ProductVariantConnection,ProductVariant[]|undefined>
}

type  CustomOptions =Record<"args", Record<"index",number>>

export type CustomFieldPolicy<Base> = NonNullable<
    // Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
    {
        // Map through all the keys of the given base type.
        [Key in keyof Base]:
        // Pick only keys with types extending the given `Condition` type.
        Record<Key, FieldPolicy<Base[Key]> | FieldReadFunction<Base[Key]>>  //  Base[Key] extends Condition
    }[keyof Base]
    >;
const  fileread : FieldReadFunction<ProductVariantConnection,ProductVariant[]|undefined>=   (value,
    options)=> {
    //  const variants :Get<ProductExtended,"variants">|undefined = options.readField("variants")
    const variants = value
    if ( variants && variants.edges ) { // && variants.edges?.length>0
        return variants.edges.map((_variant)=>{
            return _variant.node
        })
    }
    return undefined
}

const typePolicies: TypePolicies = {
    Product: {
        fields: {
            variant: {
                read(value: any,
                     // @ts-expect-error dgd
                     options = {variables: {index: 1}}) {
                    const {variables: {index = 1} = {index: 1}} = options
                    const variants: Get<ProductExtended, "variants"> | undefined = options.readField("variants")
                    if (variants && variants.edges) { // && variants.edges?.length>0
                        if (variants.edges?.length > 0) {
                            return variants.edges[index].node
                        }
                    }
                    return value
                }
            },
            variants: {
                read(value,
                     options) {
                    //  const variants :Get<ProductExtended,"variants">|undefined = options.readField("variants")
                    const variants = value
                    /*if ( variants && variants.edges ) { // && variants.edges?.length>0
                       return variants.edges.map((_variant)=>{
                          //  return _variant.node
                        })
                    }*/
                    return value
                }
            }
        }
    },
    ProductOption: {
        fields: {
            id: {
                read(value, options) {
                    const alias: string | undefined = (options.field?.alias?.value) ? options.field.alias.value : undefined
                    return (alias === "gid")
                        ? gid(value)
                        : (alias === "sid")
                            ? sid(value)
                            : value
                }
            },
            name: {
                read(value, options) {
                    const alias: string | undefined = (options.field?.alias?.value) ? options.field.alias.value : undefined
                    return (alias === "handle") ? slugify(value) : value
                }
            }
        }
    }
}

export const useCache = (options: Pick<iStorefrontApiConfig, "persist">): { cache: InMemoryCache } => {
    const cache: InMemoryCache = new InMemoryCache({typePolicies:typePolicies})

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
