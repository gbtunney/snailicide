import {Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {ProductImage, ProductVariant, GUID, IShopifyGraphQLProduct} from "./";
import {slugify} from '@snailicide/g-library'
export class Product extends Model implements IShopifyGraphQLProduct {
    static entity = 'products'

    @Attr(undefined)
    id!: GUID

    @Str('')
    type!: string

    @Str('')
    handle!: string

    @Str( '')
    title!: string

    @Bool(false)
    available!: boolean

    @Str('')
    productType!: string

    @Str('')
    vendor!: string

    @Attr([])
    tags!: string[]

    @Str('')
    onlineStoreUrl!: string

    @Str('')
    description!: string

    @Str('')
    createdAt!: Date
    @Str('')
    updatedAt!: Date
    @Str('')
    publishedAt!: Date

    @HasMany(() => ProductImage, 'product_id')
    images!: ProductImage[]

    @HasMany(() => ProductVariant, 'product_id')
    variants!: Array<ProductVariant>

    static mutators () {
        return {
            title (value:string) {
                console.warn("MUTATORS CALLED!!",value)
                return slugify(value)
            }
        }
    }
}

export default Product
