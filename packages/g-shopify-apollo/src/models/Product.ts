import {ProductFragment} from "./../types"
import {create as getModelExtended, Model, ModelExtended} from "."

export const Product = () => {
    const create = (product: ProductFragment): ModelExtended<Product> | undefined =>
        getModelExtended<ProductFragment>(product)
    return {create}
}
export type Product = ProductFragment
export type ProductExtended = ModelExtended<Product>
export default Product
