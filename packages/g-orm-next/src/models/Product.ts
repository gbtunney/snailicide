import {Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {ProductImage, ProductVariant, ProductOption, ProductOptionValue, GUID} from "./";
import {ProductFragment, PriceRangeFragment} from './../graphql/types/generated-types'

type ShopifyProduct = Omit<ProductFragment,
    'gid' | 'priceRange' | 'compareAtPriceRange' | 'images' | 'variants' | 'options' | 'descriptionHtml' | '__typename'>

export interface IShopifyProduct extends ShopifyProduct {
    images: ProductImage[]
    variants: ProductVariant[]
    options: ProductOption[]
//    descriptionHtml: string
    priceRange?: PriceRangeFragment
}

export class Product extends Model implements IShopifyProduct {
    static entity = 'products'

    @Attr('')
    id!: IShopifyProduct["id"]

    @Str('')
    type: "Product" = "Product"

    @Str('')
    handle!: IShopifyProduct["handle"]

    @Str('')
    title!: IShopifyProduct["title"]

    @Bool(false)
    available!: IShopifyProduct["available"]

    @Str('')
    productType!: IShopifyProduct["productType"]

    @Str('')
    vendor!: IShopifyProduct["vendor"]

    @Attr([])
    tags!: IShopifyProduct['tags']

    @Str('')
    onlineStoreUrl!: IShopifyProduct['onlineStoreUrl']

    @Str('')
    description!: IShopifyProduct['description']
    // @Str('')
    // descriptionHtml!: IShopifyProduct['descriptionHtml']

    @Attr(new Date())
    createdAt!: IShopifyProduct['createdAt']
    @Attr(new Date())
    updatedAt!: IShopifyProduct['updatedAt']
    @Attr(new Date())
    publishedAt!: IShopifyProduct["publishedAt"]

    @Attr(undefined)
    priceRange: IShopifyProduct['priceRange']

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
