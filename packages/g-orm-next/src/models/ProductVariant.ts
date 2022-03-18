import {Product, ProductImage, ProductOption} from './'
import {Model, Attr, Str, Bool, Num, HasOne, BelongsTo} from '@vuex-orm/core'
import {ProductVariantFragment, PriceFragment} from "./../graphql/types/generated-types";

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
}

export class ProductVariant extends Model implements IShopifyProductVariant {
    static entity = 'variants'

    @Attr('')
    id!: IShopifyProductVariant["id"]
    @Str('')
    type: 'ProductVariant' = 'ProductVariant'
    @Str('')
    title!: IShopifyProductVariant["title"]
    @Bool(false)
    available!: IShopifyProductVariant["available"]

    @Num(0)
    position!: IShopifyProductVariant["position"]

    @Str('')
    sku!: IShopifyProductVariant["sku"]

    @Num(0)
    inventoryQuantity!: IShopifyProductVariant["inventoryQuantity"]

    @Num(0)
    weight!: IShopifyProductVariant["weight"]

    @Bool(false)
    currentlyNotInStock!: IShopifyProductVariant["currentlyNotInStock"]

    @Bool(false)
    requiresShipping!: IShopifyProductVariant["requiresShipping"]
    /* * Price fields * */
    @Num(0)
    price!: IShopifyProductVariant["price"]
    @Attr(undefined)
    priceV2!: IShopifyProductVariant["priceV2"]
    @Num(0)
    compareAtPrice: IShopifyProductVariant["compareAtPrice"]
    @Attr(undefined)
    compareAtPriceV2 !: IShopifyProductVariant["compareAtPriceV2"]
    @Attr(undefined)
    unitPrice!: IShopifyProductVariant["unitPrice"]

    @Str('')
    product_id: IShopifyProductVariant["product_id"]
    @BelongsTo(() => Product, 'product_id')
    product: IShopifyProductVariant["product"]

    @Str('')
    image_id: IShopifyProductVariant["image_id"]

    @BelongsTo(() => ProductImage, 'image_id')
    image: IShopifyProductVariant["image"]
}

export default ProductVariant
