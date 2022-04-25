import {Attr, BelongsTo, Bool, HasMany, Model, Num, Str} from '@vuex-orm/core'
import {ProductModel} from './Product'
import {ProductImageModel} from './ProductImage'
import {VariantOptionModel} from './ProductOption'

import {TProductVariantGQL,TProductVariantGQLPartial} from './../types/generated'

export class ProductVariantModel extends Model implements TProductVariantGQLPartial {
    static entity = 'variants'

    @Attr('')
    id!: TProductVariantGQL["id"]
    @Str('')
    __typename: 'ProductVariant' = 'ProductVariant'
    @Str('')
    title!: TProductVariantGQL["title"]

    @Bool(false)
    availableForSale!: TProductVariantGQL["availableForSale"]

    @Num(0)
    position!: TProductVariantGQL["position"]

    @Str('')
    sku!: TProductVariantGQL["sku"]

    @Num(0)
    quantityAvailable!: TProductVariantGQL["quantityAvailable"]

    @Num(0)
    weight!: TProductVariantGQL["weight"]

    @Bool(false)
    currentlyNotInStock!: TProductVariantGQL["currentlyNotInStock"]

    @Bool(false)
    requiresShipping!: TProductVariantGQL["requiresShipping"]
    /* * Price fields * */
    @Num(0)
    price!: TProductVariantGQL["price"]
    @Attr(undefined)
    priceV2!: TProductVariantGQL["priceV2"]
    // @Num(0)
    //  compareAtPrice: TProductVariantGQL["compareAtPrice"]
    @Attr(undefined)
    compareAtPriceV2 !: TProductVariantGQL["compareAtPriceV2"]
    @Attr(undefined)
    unitPrice!: TProductVariantGQL["unitPrice"]

    @Attr([])
    selectedOptions!: TProductVariantGQL["selectedOptions"]

    @HasMany(() => VariantOptionModel, 'variant_id', 'id')
    SelectedOptions!: TProductVariantGQL["SelectedOptions"]

    @Str('')
    product_id?: TProductVariantGQL["product_id"]

    @BelongsTo(() => ProductModel, 'product_id')
    product!: TProductVariantGQL["product"]

    @Str('')
    image_id?: TProductVariantGQL["image_id"]

    @BelongsTo(() => ProductImageModel, 'image_id')
    image?: TProductVariantGQL["image"]
}

export default ProductVariantModel
export {ProductVariantModel as TProductVariantModel}
