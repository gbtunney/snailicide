import {Product, ProductImage, GUID, IPrice, IShopifyGraphQLProduct, ProductOption} from './'
import {Model, Attr, Str, Bool, Num, HasOne, BelongsTo} from '@vuex-orm/core'
import {ProductVariantFragment} from "./../graphql/types/generated-types";

type ShopifyProductVariant =
    Omit<ProductVariantFragment, 'gid' | 'image' | 'priceV2' | 'compareAtPriceV2' | 'unitPrice' | 'selectedOptions' | 'unitPriceMeasurement' | '__typename'>

//todo:selectedOptions
export interface IShopifyProductVariant extends ShopifyProductVariant {
    image?: ProductImage
}

export class ProductVariant extends Model implements IShopifyProductVariant {
    static entity = 'variants'

    @Attr(undefined)
    id = ''
    @Str('')
    type: 'ProductVariant' = 'ProductVariant'
    @Str('')
    title = ''
    @Bool(false)
    available = false

    @Num(0)
    position = 0

    @Str('')
    sku = ''

    @Num(0)
    inventoryQuantity = 0

    @Num(0)
    weight = 0

    @Bool(false)
    currentlyNotInStock = false

    @Bool(false)
    requiresShipping = false
    /* * Price fields * */
    @Num(0)
    price!: number
    @Attr(undefined)
    priceV2!: IPrice
    @Num(0)
    compareAtPrice!: number
    @Attr(undefined)
    compareAtPriceV2!: IPrice
    @Attr(undefined)
    unitPrice!: IPrice

    @Attr(undefined)
    product_id = ''
    @BelongsTo(() => Product, 'product_id')
    product!: Product

    @Attr(undefined)
    image_id!: GUID

    @BelongsTo(() => ProductImage, 'image_id')
    image = undefined
}

export default ProductVariant
