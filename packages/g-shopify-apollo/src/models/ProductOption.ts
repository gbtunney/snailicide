import {slugify} from "@snailicide/g-library";
import {Attr, BelongsTo, HasMany, HasOne, Model, Num, Str, Uid} from '@vuex-orm/core'

import {ProductVariantModel} from './ProductVariant'
import {ProductModel} from "./Product";

import {
    TProductOptionGQL,
    TProductOptionGQLPartial,
    TProductOptionValueGQL,
    TProductOptionValueGQLPartial,
    TVariantOptionGQL,
    TVariantOptionGQLPartial
} from "./../types/generated";

export class ProductOptionValueModel extends Model implements TProductOptionValueGQLPartial {
    static entity = 'productoptionvalue'
    static primaryKey = ['parent_handle', 'handle']

    @Uid()
    id!: string

    @Str('')
    __typename: 'ProductOptionValue' = 'ProductOptionValue'

    @Str('')
    handle!: TProductOptionValueGQL['handle']

    @Str('')
    title!: TProductOptionValueGQL["title"]

    @Num(1)
    position!: TProductOptionValueGQL['position']

    @Str('')
    product_id!: TProductOptionValueGQL['product_id']

    @BelongsTo(() => ProductModel, 'product_id')
    product!: TProductOptionValueGQL["product"]

    @Str('')
    parent_handle!: TProductOptionValueGQL["parent_handle"]

    @Str('')
    option_id!: TProductOptionValueGQL['option_id']

    @BelongsTo(() => ProductOptionModel, 'option_id')
    option!: TProductOptionValueGQL["option"]

    @HasMany(() => VariantOptionModel, ['product_id', 'parent_handle', 'handle'].toString(), '$id')
    variants!: TProductOptionValueGQL["variants"]
    //TVariantOption["option_value"]
}


export class ProductOptionModel extends Model implements Omit<TProductOptionGQLPartial, "name" | "values"> {
    static entity = 'productoption'

    @Attr('')
    id!: TProductOptionGQL["id"]

    @Str('')
    __typename: 'ProductOption' = 'ProductOption'

    get handle(): TProductOptionGQL["handle"] {
        return (this.title) ? slugify(this.title) : undefined
    }

    @Str('')
    title!: TProductOptionGQL["title"]

    @Num(1)
    position!: TProductOptionGQL["position"]

    @Str('')
    product_id!: TProductOptionGQL['product_id']

    @BelongsTo(() => ProductModel, 'product_id')
    product!: TProductOptionGQL["product"]

    @HasMany(() => ProductOptionValueModel, 'option_id')
    option_values!: TProductOptionGQL["option_values"]
}

export class VariantOptionModel extends Model implements TVariantOptionGQLPartial {
    static entity = 'variantoption'
    static primaryKey = ['parent_handle', 'option_value_handle', 'product_id', 'variant_id']

    @Uid()
    id!: string

    @Str(' ')
    variant_id!: TVariantOptionGQL["variant_id"]

    @BelongsTo(() => ProductVariantModel, "variant_id", "id")
    variant!: TVariantOptionGQL["variant"]

    @Str('')
    __typename: 'VariantOption' = 'VariantOption'

    @Str('')
    product_id!: TVariantOptionGQL["product_id"]

    @HasOne(() => ProductModel, "id", "product_id")
    product!: TVariantOptionGQL["product"]

    @Str('') ///ProdOption handle
    parent_handle!: TVariantOptionGQL["parent_handle"]

    @Str(' not dset')
    option_value_handle!: TVariantOptionGQL["option_value_handle"]

    @BelongsTo(() => ProductOptionValueModel, ['parent_handle', 'handle'].toString(), "$id")
    option_value!: TVariantOptionGQL["option_value"]
}

export default ProductOptionModel
export {
    ProductOptionModel as TProductOptionModel,
    ProductOptionValueModel as TProductOptionValueModel,
    VariantOptionModel as TVariantOptionModel
}
