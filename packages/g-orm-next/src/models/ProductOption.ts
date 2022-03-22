import {
    Product, ProductVariant, ProductImage,
    TProductOptionFragment,
    TProductOptionValueFragment,
} from "./";
import {Uid, Model, Attr, Str, Num, BelongsTo, HasMany} from '@vuex-orm/core'

//todo: switch these classes.
export class ProductOptionValue extends Model implements TProductOptionValueFragment {
    static entity = 'productoptionvalue'
    static primaryKey = ['option_id', 'position']
    @Uid()
    id!: TProductOptionValueFragment['id']

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

export default ProductOption
