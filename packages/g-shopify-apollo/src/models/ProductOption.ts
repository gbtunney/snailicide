import {slugify} from "@snailicide/g-library";
import {Attr, BelongsTo, HasMany, HasOne, Model, Num, Str, Uid} from '@vuex-orm/core'
import {ProductOption as TProductOption, ProductOptionValue as TProductOptionValue,} from './../types'
import {VariantOption as TVariantOption} from './../types/generated/storefront-types'
import {ProductVariant} from './ProductVariant'
import {Product} from "./Product";

export class ProductOptionValue extends Model implements Partial<TProductOptionValue> {
    static entity = 'productoptionvalue'
    static primaryKey = ['parent_handle', 'handle']

    @Uid()
    id!: string

    @Str('')
    __typename: 'ProductOptionValue' = 'ProductOptionValue'

    @Str('')
    handle!: TProductOptionValue['handle']

    @Str('')
    title!: TProductOptionValue["title"]

    @Num(1)
    position!: TProductOptionValue['position']

    @Str('')
    product_id!: TProductOptionValue['product_id']

    @BelongsTo(() => Product, 'product_id')
    product!: TProductOptionValue["product"]

    @Str('')
    parent_handle!: TProductOptionValue["parent_handle"]

    @Str('')
    option_id!: TProductOptionValue['option_id']

    @BelongsTo(() => ProductOption, 'option_id')
    option!: TProductOptionValue["option"]

    @HasMany(() => VariantOption, ['product_id', 'parent_handle', 'handle'].toString(), '$id')
    variants!: TProductOptionValue["variants"]
    //TVariantOption["option_value"]
}


export class ProductOption extends Model implements Omit<TProductOption, "name" | "values"> {
    static entity = 'productoption'

    @Attr('')
    id!: TProductOption["id"]

    @Str('')
    __typename: 'ProductOption' = 'ProductOption'

    get handle(): TProductOption["handle"] {
        return (this.title) ? slugify(this.title) : undefined
    }

    @Str('')
    title!: TProductOption["title"]

    @Num(1)
    position!: TProductOption["position"]

    @Str('')
    product_id!: TProductOption['product_id']

    @BelongsTo(() => Product, 'product_id')
    product!: TProductOption["product"]

    @HasMany(() => ProductOptionValue, 'option_id')
    option_values!: TProductOption["option_values"]
}

export class VariantOption extends Model implements TVariantOption {
    static entity = 'variantoption'
    static primaryKey = ['parent_handle', 'option_value_handle', 'product_id', 'variant_id']

    @Uid()
    id!: string

    @Str(' ')
    variant_id!: TVariantOption["variant_id"]

    @BelongsTo(() => ProductVariant, "variant_id", "id")
    variant!: TVariantOption["variant"]

    @Str('')
    __typename: 'VariantOption' = 'VariantOption'

    @Str('')
    product_id!: TVariantOption["product_id"]

    @HasOne(() => Product, "id", "product_id")
    product!: TVariantOption["product"]

    @Str('') ///ProdOption handle
    parent_handle!: TVariantOption["parent_handle"]

    @Str(' not dset')
    option_value_handle!: TVariantOption["option_value_handle"]

    @BelongsTo(() => ProductOptionValue, ['parent_handle', 'handle'].toString(), "$id")
    option_value!: TVariantOption["option_value"]
}

export default ProductOption
export {
    ProductOption as ProductOptionType,
    ProductOptionValue as ProductOptionValueType,
    VariantOption as VariantOptionType
}
