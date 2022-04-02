import {
    InMemoryCache,
    TypePolicies,
    gql,
    ReactiveVar,
    HttpLink,
    from,
    makeVar,
    makeReference
} from '@apollo/client/core'
import {persistCache, LocalStorageWrapper} from 'apollo3-cache-persist';
import {iStorefrontApiConfig} from "./../types";
import {StrictTypedTypePolicies} from './../types/generated/apollo-helpers'
import {slugify} from "@snailicide/g-library";
import {
    Product,
    ProductOption,
} from "@/types/generated/storefront-types";

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
export type TProductOptionValueFragment = {

    __typename?: 'SelectedOption',
    type: 'SelectedOption',
    parent_handle: string,
    handle: string,
    title: string
};

const typePolicies: TypePolicies = {
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
    },
    Product: {
        fields: {
            variants: {
                read(value: Product["variants"], options) {
                    const variants = value.edges.map((item) => item.node)
                    return value.edges.map((item) => item.node)
                }
            },
        }
    },
    Query: {
        fields: {
            productByHandleCustom: {
                read(value) {
                    console.error("truing to read variantsssss", value);
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
