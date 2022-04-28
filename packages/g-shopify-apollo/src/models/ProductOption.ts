import {slugify} from "@snailicide/g-library";
import {Attr, BelongsTo, HasMany, HasOne, Model, Num, Str} from '@vuex-orm/core'

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
    static primaryKey =
        ['parent_handle', 'handle'/*'option_value_handle'*/, 'product_id']

    @HasMany(() => VariantOptionModel, 'option_value_id', "key")
    pivot_variants!: TProductOptionValueGQL["pivot_variants"]

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

    //************** GETTERS  *****************//

    /**ManytoMany Psuedo Relation **/
    get Variants(): TProductOptionValueGQL["Variants"] {
        return this.pivot_variants.map((pivot) => pivot.variant)
    }

    /*gwt a string off thiw entities own primary key*/
    get key(): TProductOptionValueGQL["key"] {
        return JSON.stringify([this.parent_handle, this.handle,/*'option_value_handle'*/ this.product_id])
    }
}

export class ProductOptionModel extends Model implements Omit<TProductOptionGQLPartial, "name" | "values"> {
    static entity = 'productoption'

    @Attr('')
    id!: TProductOptionGQL["id"]

    @Str('')
    __typename: 'ProductOption' = 'ProductOption'

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

    get handle(): TProductOptionGQL["handle"] {
        return (this.title) ? slugify(this.title) : undefined
    }
}

export class VariantOptionModel extends Model implements TVariantOptionGQLPartial {
    static entity = 'variantoption'
    static primaryKey
        = ['parent_handle', 'option_value_handle', 'product_id' /* << -this is the matchh of optionvalue id */,
        'variant_id']
    // @Uid()
    // id!: string

    @Str(' ')
    variant_id!: TVariantOptionGQL["variant_id"]

    @BelongsTo(() => ProductVariantModel, "variant_id", "id")
    variant!: TVariantOptionGQL["variant"]

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

    //************** GETTERS  *****************//
    // ManytoMany !! get a string that matches the OptionValue CompositeKey
    get option_value_key(): TVariantOptionGQL["option_value_key"] {
        return JSON.stringify([this.parent_handle, this.option_value_handle, this.product_id])
    }
}

export default ProductOptionModel
export {
    ProductOptionModel as TProductOptionModel,
    ProductOptionValueModel as TProductOptionValueModel,
    VariantOptionModel as TVariantOptionModel
}
