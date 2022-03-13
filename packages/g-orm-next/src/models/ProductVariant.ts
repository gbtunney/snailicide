import {Product, ProductImage, GUID, IPrice, IShopifyGraphQLProduct} from './'
import {Model, Attr, Str, Bool, Num, HasOne, BelongsTo} from '@vuex-orm/core'

export class ProductVariant extends Model implements IShopifyGraphQLProduct {
    static entity = 'variants'

    @Attr(undefined)
    id!: GUID
    @Str('')
    type!: string
    @Str('')
    title!: string
    @Bool(false)
    available!: boolean

    @Num(0)
    position!: number

    @Str('')
    sku!: string

    @Num(0)
    inventoryQuantity!: number

    @Num(0)
    weight!: number

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
    product_id!: GUID
    @BelongsTo(() => Product, 'product_id')
    product!: Product

    @Attr(undefined)
    image_id!: GUID

    @BelongsTo(() => ProductImage, 'image_id')
    image!: ProductImage
}

export default ProductVariant
