import {Bool, HasMany, Model, Str} from '@vuex-orm/core'
import {ProductOptionModel} from './ProductOption'
import {ProductVariantModel} from "./ProductVariant";
import {ProductImageModel} from "./ProductImage";
/* * TYPES   GENERSTED * */
import {
    TProductGQL,
    TProductGQLPartial,
    TProductFragment,
    TProductFragmentPartial
} from "./../types/generated";

export class ProductModel extends Model implements TProductGQLPartial {
    static entity = 'products'
    static primaryKey = 'id'

    @Str('')
    id!: TProductGQL["id"]

    @Str('Product')
    __typename?: "Product"

    @Str('')
    handle!: TProductGQL["handle"]

    @Str('title')
    title!: TProductGQL["title"]

    @Bool(false)
    available!: TProductGQL["availableForSale"]

    @Str(' ')
    productType!: TProductGQL["productType"]

    @HasMany(() => ProductOptionModel, 'product_id')
    options?: TProductGQL["options"]

    @HasMany(() => ProductVariantModel, 'product_id')
    Variants!: TProductGQL["Variants"]

    @HasMany(() => ProductImageModel, 'product_id')
    Images!: TProductGQL["Images"]

    get gid(): TProductGQL["gid"] {
        return (this.id && this.id.length > 0) ? atob(this.id) : this.id
    }

    get cacheID(): TProductGQL['cacheID'] {
        return `${this.__typename}:${this.id}`
    }
}

export default ProductModel
export {ProductModel as TProductModel}
