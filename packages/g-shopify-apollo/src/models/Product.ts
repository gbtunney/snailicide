import {ProductFragment} from "./../types"
import {ModelExtended} from "."
import {Model, ModelFields, Uid, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {ProductOption} from './ProductOption'

export type TProduct = ModelExtended<ProductFragment>
import {slugify} from "@snailicide/g-library";
import {ProductVariant} from "./ProductVariant";
import ProductImage from "./ProductImage";

//Partial<TProduct>
export class Product extends Model {
    static entity = 'products'
    static primaryKey = 'id'

    @Str('')
    id!: TProduct["id"]

    @Str('Product')
    __typename?: "Product"

    @Str('')
    handle!: TProduct["handle"]

    @Str('title')
    title!: TProduct["title"]

    @Bool(false)
    available!: TProduct["availableForSale"]

    @Str(' ')
    productType!: TProduct["productType"]

    @HasMany(() => ProductOption, 'product_id')
    options?: TProduct["options"]

    @HasMany(() => ProductVariant, 'product_id')
    Variants?: TProduct["Variants"]

    @HasMany(() => ProductImage, 'product_id')
    Images?: TProduct["Images"]

    get gid(): TProduct["gid"] {
        return (this.id && this.id.length > 0) ? atob(this.id) : this.id
    }

    get cacheID(): TProduct['cacheID'] {
        return `${this.__typename}:${this.id}`
    }
}

export default Product
export {Product as ProductType}
