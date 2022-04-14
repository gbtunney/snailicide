import {
    InMemoryCache,
    gql,
    ReactiveVar,
    HttpLink,
    from,
    makeVar,
    makeReference, Reference, StoreObject

} from '@apollo/client/core'
import {FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy} from '@apollo/client/cache';
import {hasDirectives, isInlineFragment} from '@apollo/client/utilities';

import {ProductFieldPolicy, StrictTypedTypePolicies} from './../types/generated/apollo-helpers'
import {InvalidationPolicyCache} from '@nerdwallet/apollo-cache-policies';

import {slugify} from "@snailicide/g-library";
import {
    Exact,
    Product, ProductVariantConnection,
    ProductOption, QueryRoot, ProductVariant, Node
} from "@/types/generated/storefront-types";
import {
    StringKeyOf,
    Get,
    LiteralUnion,
    Except,
    Merge,
    RequireAllOrNone,
    ValueOf,
    SetRequired,
    RequireExactlyOne,
    LiteralToPrimitive
} from 'type-fest';
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

import {parseGid, composeGid} from '@shopify/admin-graphql-api-utilities';
import {useApolloClient} from "@vue/apollo-composable";
import {matchProp, isUndefined, isNotUndefined} from "@/types";

type  CustomOptions = Record<"args", Record<"index", number>>

export type CustomFieldPolicy<Base> = NonNullable<// Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
    {
        // Map through all the keys of the given base type.
        [Key in keyof Base]:
        // Pick only keys with types extending the given `Condition` type.
        Record<Key, FieldPolicy<Base[Key]> | FieldReadFunction<Base[Key]>>  //  Base[Key] extends Condition
    }[keyof Base]>;

const fileread: FieldReadFunction<ProductVariantConnection, ProductVariant[] | undefined> = (value, options) => {
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

    ShopifyNode: {
        fields: {
            handle() {
                alert()
                debugger
            }
        }
    },
    Product: {
        fields: {
            variant: {
                keyArgs: [],
                read(read, options) {
                    const filtered = filterByTypes<ProductVariant>("ProductVariant", options.cache)
                    //      debugger;
                    console.log(read, filtered, options)
                    return (filtered.length > 0) ? (filtered[0]) : undefined
                }
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
            allVariants(read, options) {
                //return "helllo!!!!!!!!!!"
                const filtered = filterByTypes<ProductVariant>("ProductVariant", options.cache)
                const todo = options.cache.readFragment({
                    id: "ProductVariant:Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjU4OTI4Mjg3NzU1OA==",// The value of the to-do item's cache ID
                    fragment: gql`
                        fragment tttttt on ProductVariant {
                            id
                            __typename
                            sku
                        }`,
                });
                console.log(todo, options)
                return [todo]
            }
        }
    }
}

const filterByTypes = <T = ProductVariant>(type: string, cache: InMemoryCache) => {
    const serializedState = cache.extract()
    const typeNameItems = Object.values(serializedState)
    return typeNameItems.filter((_item) => {
        if (isUndefined<T>(_item?.__typename)) return false
        else {
            if (_item?.__typename && (_item?.__typename).toString()) {
                if ((_item?.__typename).toString() === type) {
                    return true
                }
            }
            return false
        }
    })
}

/*export const useNewCache = (): InvalidationPolicyCache => {
    return new InvalidationPolicyCache({typePolicies: typePolicies})
}*/
export const useCache = (): InMemoryCache => {
    return new InMemoryCache({typePolicies: typePolicies})
}
export default useCache
