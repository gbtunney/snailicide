import {BelongsTo, HasOne, Model, Num, Str, Uid} from "@vuex-orm/core";
import {TProductInstanceGQL, TProductInstanceGQLPartial} from "./../types/generated";
import {ProductModel} from "./Product";
import {ProductVariantModel} from "./ProductVariant";
import ProductGroupModel from "./ProductGroup"

export class ProductInstanceModel extends Model implements TProductInstanceGQLPartial {
    static entity = 'productinstance'
    static primaryKey = 'id'

    @Str(' ')
    id!: string

    @Str('')
    __typename: 'ProductInstance' = 'ProductInstance'

    @Str('')
    group_id?: TProductInstanceGQL['group_id']

    @BelongsTo(() => ProductGroupModel, "id", 'group_id')
    group?: TProductInstanceGQL["group"]

    @Str('')
    product_handle?: TProductInstanceGQL['product_handle']

    @BelongsTo(() => ProductModel,  'product_handle','handle')
    product?: TProductInstanceGQL["product"]

    @Num(1)
    quantity?: TProductInstanceGQL['quantity']

    @Str('')
    variant_id?: TProductInstanceGQL['variant_id']

    @HasOne(() => ProductVariantModel, "id", 'variant_id')
    variant?: TProductInstanceGQL["variant"]
}
/*
 Options Boolena
            selection_mode: this.string("normal").nullable(),
            add_to_cart_enabled: this.boolean(EDITABLE_DEFAULTS["addToCart"]), /// this is bool to allow a add to cart button for TOTAL GROUP.
            quantity_editable: this.boolean(EDITABLE_DEFAULTS["quantity"]),
            variant_editable: this.boolean(EDITABLE_DEFAULTS["variant"]),
            options_editable: this.attr(EDITABLE_DEFAULTS["options"]), //future pref dont know when implement
*/
export default ProductInstanceModel
export {ProductInstanceModel as TProductInstanceModel}
