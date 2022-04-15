
import {
    ProductOption as TProductOption,
    ProductOptionValue as TProductOptionValue,
    VariantOption as TVariantOption,
} from './../types'
import {Uid, Model, Attr, Str, Num, BelongsTo, HasMany, HasOne} from '@vuex-orm/core'

export class ProductOptionValue extends Model implements Omit<TProductOptionValue, "variants"> {
    static entity = 'productoptionvalue'
    static primaryKey = ['option_id', 'position']

  //      @Str('')
    //id!: TProductOptionValue["id"]

    @Str('')
    __typename: 'ProductOptionValue' = 'ProductOptionValue'

    @Str('')
    handle!: TProductOptionValue['handle']

    @Str('')
    title!: TProductOptionValue["title"]

    @Num(1)
    position!: TProductOptionValue['position']

    //  @Attr(undefined)
    // product_id!: TProductOptionValueFragment['p']

    // @BelongsTo(() => Product, 'product_id')
    // product!: Product

    @Str('')
    parent_handle!: TProductOptionValue["parent_handle"]

    @Attr('')
    option_id!: TProductOptionValue['option_id']

    @BelongsTo(() => ProductOption, 'option_id')
    option!: TProductOptionValue["option"]

    //@HasMany(()=>ProductVariant,"")
}


export class ProductOption extends Model implements Omit<TProductOption, "name" | "values"> {
    static entity = 'productoption'

    @Attr('')
    id!: TProductOption["id"]

    @Str('')
    __typename: 'ProductOption' = 'ProductOption'

    @Str('')
    handle!: TProductOption["handle"]

    @Str('')
    title!: TProductOption["title"]

    @Num(1)
    position!: TProductOption["position"]

    @Str('')
    product_id!: TProductOption['product_id']

   // @BelongsTo(() => Product, 'product_id')
    product!: TProductOption["product"]

    @HasMany(() => ProductOptionValue, 'option_id')
    option_values!: TProductOption["option_values"]

}

export class VariantOption extends Model implements TVariantOption {
    static entity = 'variantoption'
    static primaryKey = ['variant_id', 'option_value_id']

    @Str('')
    __typename: 'VariantOption' = 'VariantOption'

    @Str('')
    variant_id!: TVariantOption["variant_id"]

 //   @HasOne(() => ProductVariant, "id", "variant_id")
    variant!: TVariantOption["variant"]

    @Attr([])
    option_value_id!: TVariantOption["option_value_id"]

    @HasOne(() => ProductOptionValue, "id", "option_value_id")
    option_value!: TVariantOption["option_value"]
}

export default ProductOption
export {
    ProductOption as ProductOptionType,
    ProductOptionValue as ProductOptionValueType,
    VariantOption as VariantOptionType
}
