import {
    InMemoryCache,
    gql,
    ReactiveVar,
    HttpLink,
    from,
    makeVar,
    makeReference,

} from '@apollo/client/core'
import {FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy} from '@apollo/client/cache';
import {ProductFieldPolicy, StrictTypedTypePolicies} from './../types/generated/apollo-helpers'
import {slugify} from "@snailicide/g-library";
import {
    Exact,
    Product, ProductNodeQuery, ProductVariantConnection,
    ProductOption, QueryRoot, ProductVariant,
} from "@/types/generated/storefront-types";
import {StringKeyOf, Get, ValueOf, SetRequired, RequireExactlyOne} from 'type-fest';
import {
    FieldMergeFunction,
    KeyFieldsFunction, FieldFunctionOptions,
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

import {parseGid,composeGid} from '@shopify/admin-graphql-api-utilities';
import {useApolloClient} from "@vue/apollo-composable";

const gid = (value: string): string => {
    return atob(value)
}
const sid = (value: string): string => {
    return parseGid(gid(value))
}

type  CustomOptions = Record<"args", Record<"index", number>>

export type CustomFieldPolicy<Base> = NonNullable<// Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
    {
        // Map through all the keys of the given base type.
        [Key in keyof Base]:
        // Pick only keys with types extending the given `Condition` type.
        Record<Key, FieldPolicy<Base[Key]> | FieldReadFunction<Base[Key]>>  //  Base[Key] extends Condition
    }[keyof Base]>;
const fileread: FieldReadFunction<ProductVariantConnection, ProductVariant[] | undefined> = (value,
                                                                                             options) => {
    //  const variants :Get<ProductExtended,"variants">|undefined = options.readField("variants")
    const variants = value
    if (variants && variants.edges) { // && variants.edges?.length>0
        return variants.edges.map((_variant) => {
            return _variant.node
        })
    }
    return undefined
}

const typePolicies: TypePolicies = {
    Product: {
        fields: {
            gid(read, {readField}) {
                return (readField("id")) ? gid(readField("id") as string) : undefined
            },
            sid(read, {readField}) {
                    return (readField("id")) ? sid(readField("id") as string) : undefined
            },
        }
    },
    ProductOption: {
        fields: {
            testing(read, options) {
                const values2: readonly string[] | undefined = options.readField("values")
                const handle = options.readField("handle")

                if (options?.variables?.product_id && values2) {
                    const newvar = values2.map((_item) => {
                        return {
                            parent_handle: handle,
                            option_id: options.readField("id"),
                            handle: _item,
                            product_id: options?.variables?.product_id
                        }
                    })
                    console.warn("productid!", newvar);

                    return newvar
                }
                console.warn("CART ITEMS CALLLEDDD HHEREEE!", read, values2, options?.field);
                return read
            },
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
            handle: {
                read(value, options) {
                    const handle: string | undefined = options.readField("name")
                    return (handle) ? slugify(handle) : undefined
                }
            },
            /*values:{
                read(value:ProductOption["values"], options) {
                    debugger;
                  const testing =   value.map((_value)=>{
                      return{
                            handle:slugify(_value),
                            title: _value,
                            //id: `ProductOptionValue:${options.readField("id")},${slugify(_value)}`,
                            option:{
                                id:options.readField("id"),
                                name:options.readField('name'),
                                __typename:"ProductOption"
                            }
                        }
                    })
                 const newstuff =  testing.map((item)=>{
                     const query5 =options.cache.writeFragment({
                         id: `ProductOptionValue:${options.readField("id")},${slugify(item.handle)}`,
                         fragment: gql`
                             fragment ProductOptionValueRealFragment on ProductOptionValue
                             {
                                 handle
                                 option{
                                     id
                                     name
                                 }
                                 title
                             }
                         `,
                         data:item,
                     });
                     return makeVar(query5)
                    })
                    console.log("testing gggg",newstuff)
                    return newstuff
                },
            }*/
        }
    },
    Query: {
        fields: {
            allVariants(read, options){
                console.warn("CallVariantsEE!", options.readField("product"), options.storage);
            }
        }
    }
}

export const useCache = (): InMemoryCache => {
    return new InMemoryCache({typePolicies: typePolicies})
}
export default useCache
