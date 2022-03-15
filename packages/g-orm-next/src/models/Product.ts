import {Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {ProductImage, ProductVariant, ProductOption, ProductOptionValue, GUID} from "./";
import {ProductFragment} from "./../graphql/types/ProductFragment";

type ShopifyProduct = Omit<ProductFragment, 'images' | 'variants' | 'options' | 'descriptionHtml' | '__typename'>

export interface IShopifyProduct extends ShopifyProduct {
    images: ProductImage[]
    variants: ProductVariant[]
    options: ProductOption[]
    descriptionHtml: string
}

export class Product extends Model implements IShopifyProduct {
    static entity = 'products'

    @Attr(undefined)
    id = ''

    @Str('')
    type = ''

    @Str('')
    handle = ''

    @Str('')
    title = ''

    @Bool(false)
    available = false

    @Str('')
    productType = ''

    @Str('')
    vendor = ''

    @Attr([])
    tags = []

    @Str('')
    onlineStoreUrl = ''

    @Str('')
    description = ''
    @Str('')
    descriptionHtml = ''

    @Str('')//TODO: date type? idk convert ?
    createdAt = ''
    @Str('')
    updatedAt = ''
    @Str('')
    publishedAt = ''

    @HasMany(() => ProductImage, 'product_id')
    images = []

    @HasMany(() => ProductVariant, 'product_id')
    variants = []

    @HasMany(() => ProductOption, 'product_id')
    options = []

    @HasMany(() => ProductOptionValue, 'product_id')
    optionvalues!: ProductOptionValue[]
}

export default Product
