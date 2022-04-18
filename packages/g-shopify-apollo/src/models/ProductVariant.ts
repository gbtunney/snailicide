import {policyExtended_ID} from "./typeExtendedID";
import {Product, ProductOption, ProductVariant} from "./../types/generated/storefront-types";
import {gql} from "@apollo/client/core";
import {slugify} from "@snailicide/g-library";
import {readField, CustomTypePolicy} from "./../types";
import * as RA from "ramda-adjunct";

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
export default typePolicyProductVariant
