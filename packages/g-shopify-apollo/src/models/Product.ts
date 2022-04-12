import {ProductFragment} from "./../types"
import {ModelExtended} from "."
import {Model, ModelFields, Attr, Str, Bool, HasMany} from '@vuex-orm/core'

export type TProduct = ModelExtended<ProductFragment>

export class Product extends Model implements Partial<TProduct> {
    static entity = 'products'

    @Str('')
    id!: TProduct["id"]

    @Str('Product')
    __typename?: "Product"

    @Str('')
    handle!: TProduct["handle"]

    @Str('')
    title!: TProduct["title"]

    @Bool(false)
    available!: TProduct["availableForSale"]

    @Str('')
    productType!: TProduct["productType"]

    get gid(): TProduct["gid"] {
        return (this.id && this.id.length > 0) ? atob(this.id) : this.id
    }

    get cacheID(): TProduct['cacheID'] {
        return `${this.__typename}:${this.id}`
    }
}

export default Product
export {Product as ProductType}
