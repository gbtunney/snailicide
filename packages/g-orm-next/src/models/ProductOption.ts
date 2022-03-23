import {
    Product, ProductVariant, ProductImage,
    TProductOptionFragment,
    TProductOptionValueFragment,
    TVariantOption
} from "./";
import {Uid, Model, Attr, Str, Num, BelongsTo, HasMany} from '@vuex-orm/core'

export class ProductOptionValue extends Model implements TProductOptionValueFragment {
    static entity = 'productoptionvalue'
    static primaryKey = ['option_id', 'position']

    @Str('')
    type: 'ProductOptionValue' = 'ProductOptionValue'

    @Str('')
    handle!: TProductOptionValueFragment['handle']

    @Str('')
    title!: TProductOptionValueFragment["title"]

    @Num(1)
    position!: TProductOptionValueFragment['position']

    //  @Attr(undefined)
    // product_id!: TProductOptionValueFragment['p']

    // @BelongsTo(() => Product, 'product_id')
    // product!: Product

    @Str('')
    parent_handle!: TProductOptionValueFragment["parent_handle"]

    @Str('')
    option_id!: TProductOptionValueFragment['option_id']

    @BelongsTo(() => ProductOption, 'option_id')
    option!: TProductOptionValueFragment["option"]
}


export class ProductOption extends Model implements TProductOptionFragment {
    static entity = 'productoption'

    @Str('')
    id!: TProductOptionFragment["id"]

    @Str('')
    type: 'ProductOption' = 'ProductOption'

    @Str('')
    handle!: TProductOptionFragment["handle"]

    @Str('')
    title!: TProductOptionFragment["title"]

    @Num(1)
    position!: TProductOptionFragment["position"]

    @Str('')
    product_id!: TProductOptionFragment['product_id']

    @BelongsTo(() => Product, 'product_id')
    product!: TProductOptionFragment["product"]

    @HasMany(() => ProductOptionValue, 'option_id')
    values!: TProductOptionFragment["values"]

}

export class VariantOption extends Model implements TVariantOption {
    static entity = 'variantoption'
    static primaryKey = ['variant_id', 'option_value_id']

    @Str('')
    variant_id!: TVariantOption["variant_id"]

    @Str('')
    option_value_id!: TVariantOption["option_value_id"]

}

export default ProductOption
