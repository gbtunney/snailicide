
import {ProductVariantFragment} from "./../types"
import {create as getModelExtended, Model, ModelExtended} from "."

export const Variant = () => {
    const create = (product: ProductVariantFragment): ModelExtended<ProductVariant> | undefined =>
        getModelExtended<ProductVariantFragment>(product)
    return {create}
}
export type ProductVariant = ProductVariantFragment
export type ProductExtended = ModelExtended<ProductVariant>
export default ProductVariant
