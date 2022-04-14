import {InMemoryCache, gql} from "@apollo/client/core";
import {slugify} from "@snailicide/g-library";
import {TypePolicies} from "@apollo/client/cache";
import {readField, CustomTypePolicy, isUndefined, ProductVariant} from "./../types";

import {Product} from "./../types/generated/storefront-types";
import {policyExtended_ID} from "./typeExtendedID";

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

export const typePolicyProduct: CustomTypePolicy<Product> = {
    //  keyFields: ["gid"],
    fields: {
        ...policyExtended_ID.fields,
        variant: {
            read(read, options) {
                debugger;
                const _index: number = (options.args?.index) ? options.args?.index : 4
                const _indexvar: number = (options.variables?.index) ? options.variables?.index : 4
                console.log(options, _index, _indexvar)
                const filtered = filterByTypes<ProductVariant>("ProductVariant", options.cache)
                if (filtered && filtered.length <= _index) {
                    return (filtered[_index] as unknown) as ProductVariant
                }
                return
            }
        }
    }
}

export const typePolicyProductVariant: CustomTypePolicy<ProductVariant> = {
    fields: {
        ...policyExtended_ID.fields,
        product_id(read, options) {
            //todo: set a variable to if return the typename in the ID
            const boolIncludeType = true

            const _productFieldID = options.cache.identify(readField<ProductVariant, 'product'>(options, 'product'))
            const _product = options.cache.readFragment<Product>({
                id: _productFieldID,
                fragment: gql`
                    fragment ProductID on Product{
                        id
                        __typename
                    }
                `
            })
            return (_product?.id)
                ? (boolIncludeType)
                    ? `${_product.__typename}:${_product.id}`
                    : _product.id
                : undefined
        },
        handle(read, options) {
            const title: string | undefined = options.readField("title")
            return (title) ? slugify(title) : undefined
        },
    }
}
export const typePolicyMerged: TypePolicies = {
    ProductVariant: {
        ...typePolicyProductVariant
    },
    Product: {
        ...typePolicyProduct
    },
}
