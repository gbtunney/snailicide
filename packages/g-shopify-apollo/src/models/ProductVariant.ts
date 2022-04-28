import {Attr, BelongsTo, Bool, HasMany, Model, Num, Str} from '@vuex-orm/core'
import {ProductModel} from './Product'
import {ProductImageModel} from './ProductImage'
import {VariantOptionModel} from './ProductOption'

import {TProductVariantGQL, TProductVariantGQLPartial} from './../types/generated'
import {slugify} from "@snailicide/g-library";

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
    pivot_selected_options!: TProductVariantGQL["pivot_selected_options"]

    @Str('')
    product_id?: TProductVariantGQL["product_id"]

    @BelongsTo(() => ProductModel, 'product_id')
    product!: TProductVariantGQL["product"]

    @Str('')
    image_id?: TProductVariantGQL["image_id"]

    @BelongsTo(() => ProductImageModel, 'image_id')
    image?: TProductVariantGQL["image"]

    //************** GETTERS  *****************//
    get SelectedOptions(): TProductVariantGQL["SelectedOptions"] | undefined {
        return this.pivot_selected_options.map((pivot) => {
            return pivot.option_value
        })
    }

    get handle(): TProductVariantGQL["handle"] {
        return (this.title) ? slugify(this.title) : undefined
    }

    get gid(): TProductVariantGQL["gid"] {
        return (this.id && this.id.length > 0) ? atob(this.id) : this.id
    }

    get cacheID(): TProductVariantGQL['cacheID'] {
        return `${this.__typename}:${this.id}`
    }
}

export default ProductVariantModel
export {ProductVariantModel as TProductVariantModel}
