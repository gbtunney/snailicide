import {policyExtended_ID} from "./typeExtendedID";
import {
    Product as TProduct,
    ProductOption,
    ProductVariant as TProductVariant,
} from "./../types/generated/storefront-types";
import {gql} from "@apollo/client/core";
import {slugify} from "@snailicide/g-library";
import {readField, CustomTypePolicy, ProductImage as TProductImage } from "./../types";

export const typePolicyProductVariant: CustomTypePolicy<TProductVariant> = {
    fields: {
        ...policyExtended_ID.fields,
        product_id(read, options) {
            //todo: set a variable to if return the typename in the ID
            const boolIncludeType = true
            const _productFieldID = options.cache.identify(readField<TProductVariant, 'product'>(options, 'product'))
            const _product = options.cache.readFragment<TProduct>({
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
