import {InMemoryCache, gql} from "@apollo/client/core";
import * as RA from "ramda-adjunct"
import {slugify} from "@snailicide/g-library";
import {readField, CustomTypePolicy, isUndefined, ProductImage} from "./../types";
import {
    Product,
    ProductVariant,
    ProductOption,
    ProductOptionValue,
    ProductVariantEdge,
    ProductVariantConnection
} from "./../types/generated/storefront-types";

import {policyExtended_ID} from './typeExtendedID'

console.log("policyExtended_ID", policyExtended_ID)
const filterByTypes = <T = ProductVariant>(type: string, cache: InMemoryCache) => {
    const serializedState = cache.extract()
    const typeNameItems = Object.values(serializedState)
    return typeNameItems.filter((_item) => {
        if (isUndefined<T>(_item?.__typename)) return false
        else {
            if (_item?.__typename && (_item?.__typename).toString()) {
                if ((_item?.__typename).toString() === type) return true
            }
        }
    })
}
const getProductOptionValuesExpanded = (option: ProductOption) => {
    const {id: option_id, values = []} = option
    return values.map((value): ProductOptionValue => {
        const dataObject: ProductOptionValue = {
            __typename: "ProductOptionValue",
            handle: slugify(value),
            title: value,
            option_id,
            option
        }
        return dataObject
    })
}

/* * Product Images  * */
export const typePolicyProductImage: CustomTypePolicy<ProductImage> = {
    fields: {
        /* * Product Images : merge variant field. * */
        variants: {
            merge(excisting, incoming, options) {
                if (excisting === undefined) excisting = []
                console.log("hi incoming", incoming, "excisting ", excisting)
                return (incoming !== undefined
                    && RA.isArray(excisting) && RA.isArray(incoming))
                    ? [...excisting, ...incoming]
                    : incoming
            }
        }
    }
}
export const typePolicyVariantEdge: CustomTypePolicy<ProductVariantEdge> = {}

export const typePolicyProductOption: CustomTypePolicy<ProductOption> = {}
export const typePolicyProductOptionValue: CustomTypePolicy<ProductOptionValue> = {
    keyFields: ["option_id", "handle"]
}
export const typePolicyProduct: CustomTypePolicy<Product> = {
    //  keyFields: ["gid"],
    fields: {
        ...policyExtended_ID.fields,
        options: {
            /* * Create Option Value objects and add to cache.  * */
            merge(excisting, incoming, options) {
                const optionArray = incoming.map((_option) => {
                    const option_id = options.cache.identify(_option/*readField<ProductOption, 'id'>(options, 'id')*/)
                    //**** retrieve the id and value field from the reference
                    const _current_option_data = options.cache.readFragment<ProductOption>({
                        id: option_id,
                        fragment: gql`fragment GetOptionValues on ProductOption {id name values}`
                    })
                    if (RA.isNotNil(_current_option_data)) {
                        const _productoption_write = options.cache.writeFragment<Partial<ProductOption>, ProductOption>({
                            id: option_id,
                            fragment: gql`
                                fragment WriteProductOption on ProductOption {
                                    handle @client
                                    option_values @client {
                                        title
                                        handle
                                        option_id
                                        option
                                    }
                                }
                            `,
                            data: {
                                handle: slugify(_current_option_data.name),
                                option_values: getProductOptionValuesExpanded(_current_option_data) ///compiled option_values
                            }
                        })
                        if (!_productoption_write) throw "Product Option attempt to WRITE option_values :::: FAILED!!!!!!!"

                        /* * TEST THE ADDED VALUES ( todo: turn off later * */
                        const _productoption_read_test = options.cache.readFragment<ProductOption>({
                            id: option_id,
                            fragment: gql`
                                fragment OptionID on ProductOption {
                                    id
                                    __typename
                                    name
                                    handle
                                    values
                                    option_values @client {
                                        title
                                        handle
                                        option_id
                                        option
                                    }
                                }
                            `
                        })
                        if (!_productoption_read_test) throw "Product Option attempt to read option_values FAILED!!!!!!!"
                        else console.log("Product Option: added option_values READ SUCCESS!!!", _productoption_read_test)
                    }
                })
                return incoming
            }
        },
        variant: {
            read(read, options) {
                debugger;
                const _index: number = (options.args?.index) ? options.args?.index : 4
                const _indexvar: number = (options.variables?.index) ? options.variables?.index : 4
                console.log(options, _index, _indexvar)
                const filtered = filterByTypes<ProductVariant>("ProductVariant", options.cache)
                if (filtered && filtered.length <= _index) return (filtered[_index] as unknown) as ProductVariant
            }
        }
    }
}
