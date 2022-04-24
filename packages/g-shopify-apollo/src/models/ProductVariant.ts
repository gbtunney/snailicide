import {ModelExtended} from './'
import {Product} from './Product'
import {ProductImage} from './ProductImage'
import {ProductOption, VariantOptionType} from './ProductOption'

import {Model, Attr, Str, Bool, Num, HasOne, BelongsTo, HasMany} from '@vuex-orm/core'
import {VariantOption} from './ProductOption'
import {Merge} from 'type-fest';
import {Maybe, ProductVariant as TProductVariant, Product as TProduct} from './../types/generated/storefront-types'
//export type TProductVariant = ModelExtended<ProductVariant>

/*
interface OverrideIVariant {
    selectedOptions : VariantOption[]
}

type ShopifyProductVariant =
    Merge<TProductVariantFragment, OverrideIVariant>
*/


export class ProductVariant extends Model implements Partial<TProductVariant> {
    static entity = 'variants'

    @Attr('')
    id!: TProductVariant["id"]
    @Str('')
    __typename: 'ProductVariant' = 'ProductVariant'
    @Str('')
    title!: TProductVariant["title"]

    @Bool(false)
    availableForSale!: TProductVariant["availableForSale"]

    @Num(0)
    position!: TProductVariant["position"]

    @Str('')
    sku!: TProductVariant["sku"]

    @Num(0)
    quantityAvailable!: TProductVariant["quantityAvailable"]

    @Num(0)
    weight!: TProductVariant["weight"]

    @Bool(false)
    currentlyNotInStock!: TProductVariant["currentlyNotInStock"]

    @Bool(false)
    requiresShipping!: TProductVariant["requiresShipping"]
    /* * Price fields * */
    @Num(0)
    price!: TProductVariant["price"]
    @Attr(undefined)
    priceV2!: TProductVariant["priceV2"]
    // @Num(0)
    //  compareAtPrice: TProductVariant["compareAtPrice"]
    @Attr(undefined)
    compareAtPriceV2 !: TProductVariant["compareAtPriceV2"]
    @Attr(undefined)
    unitPrice!: TProductVariant["unitPrice"]

    @Attr([])
    selectedOptions!: TProductVariant["selectedOptions"]

    @HasMany(() => VariantOption, 'variant_id', 'id')
    SelectedOptions!: TProductVariant["SelectedOptions"]

    @Str('')
    product_id?: TProductVariant["product_id"]

    @BelongsTo(() => Product, 'product_id')
    product!: TProductVariant["product"]

    @Str('')
    image_id?: TProductVariant["image_id"]

    @BelongsTo(() => ProductImage, 'image_id')
    image?: TProductVariant["image"]
}

export default ProductVariant
export {ProductVariant as ProductVariantType}
