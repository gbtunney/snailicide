import {Product, ProductImage, ProductOption} from './'
import {Model, Attr, Str, Bool, Num, HasOne, BelongsTo} from '@vuex-orm/core'
import {TProductVariantFragment} from '.'
/*
type ShopifyProductVariant =
    Omit<ProductVariantFragment, 'gid' | 'image' | 'priceV2' | 'compareAtPriceV2' | 'unitPrice' | 'selectedOptions' | 'unitPriceMeasurement' | '__typename'>

//todo:selectedOptions
export interface IShopifyProductVariant extends ShopifyProductVariant {
    position: number
    image?: ProductImage
    image_id?: string
    product?: Product
    product_id?: string

    priceV2?: PriceFragment
    compareAtPriceV2?: PriceFragment
    unitPrice?: PriceFragment
}*/

export class ProductVariant extends Model implements TProductVariantFragment {
    static entity = 'variants'

    @Attr('')
    id!: TProductVariantFragment["id"]
    @Str('')
    type: 'ProductVariant' = 'ProductVariant'
    @Str('')
    title!: TProductVariantFragment["title"]
    @Bool(false)
    available!: TProductVariantFragment["available"]

    @Num(0)
    position!: TProductVariantFragment["position"]

    @Str('')
    sku!: TProductVariantFragment["sku"]

    @Num(0)
    inventoryQuantity!: TProductVariantFragment["inventoryQuantity"]

    @Num(0)
    weight!: TProductVariantFragment["weight"]

    @Bool(false)
    currentlyNotInStock!: TProductVariantFragment["currentlyNotInStock"]

    @Bool(false)
    requiresShipping!: TProductVariantFragment["requiresShipping"]
    /* * Price fields * */
    @Num(0)
    price!: TProductVariantFragment["price"]
    @Attr(undefined)
    priceV2!: TProductVariantFragment["priceV2"]
    @Num(0)
    compareAtPrice: TProductVariantFragment["compareAtPrice"]
    @Attr(undefined)
    compareAtPriceV2 !: TProductVariantFragment["compareAtPriceV2"]
    @Attr(undefined)
    unitPrice!: TProductVariantFragment["unitPrice"]

    @Str('')
    product_id: TProductVariantFragment["product_id"]
    @BelongsTo(() => Product, 'product_id')
    product: TProductVariantFragment["product"]

    @Str('')
    image_id: TProductVariantFragment["image_id"]

    @BelongsTo(() => ProductImage, 'image_id')
    image: TProductVariantFragment["image"]
}

export default ProductVariant
