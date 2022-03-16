import {Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {ProductImage, ProductVariant, ProductOption, ProductOptionValue, GUID} from "./";
import {ProductFragment, ProductPriceRange, Maybe} from './../graphql/types/generated-types'

type ShopifyProduct = Omit<ProductFragment,
    'gid' | 'priceRange' | 'compareAtPriceRange' | 'images' | 'variants' | 'options' | 'descriptionHtml' | '__typename'>

export interface IShopifyProduct extends ShopifyProduct {
    images: ProductImage[]
    variants: ProductVariant[]
    options: ProductOption[]
    descriptionHtml: string
    priceRange?: ProductPriceRange
}

export class Product extends Model implements IShopifyProduct {
    static entity = 'products'

    @Attr(undefined)
    id = ''

    @Str('')
    type: "Product" = "Product"

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

    @Str('')
    createdAt = new Date()
    @Str('')
    updatedAt = new Date()
    @Str('')
    publishedAt = new Date()

    @Attr(undefined)
    priceRange = undefined

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
