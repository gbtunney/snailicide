import {BelongsTo, HasOne, Model, Num, Str, Uid} from "@vuex-orm/core";
import {TProductInstanceGQL, TProductInstanceGQLPartial} from "./../types/generated";
import {ProductModel} from "./Product";
import {ProductVariantModel} from "./ProductVariant";
import ProductGroupModel from "./ProductGroup"

export class ProductInstanceModel extends Model implements TProductInstanceGQLPartial {
    static entity = 'productinstance'
    static primaryKey = 'id'

    @Uid()
    id!: string

    @Str('')
    __typename: 'ProductInstance' = 'ProductInstance'

    @Str('')
    group_id?: TProductInstanceGQL['group_id']

    @BelongsTo(() => ProductGroupModel, "id", 'group_id')
    group?: TProductInstanceGQL["group"]

    @Str('')
    product_handle?: TProductInstanceGQL['product_handle']

    @HasOne(() => ProductModel, 'handle', 'product_handle')
    product?: TProductInstanceGQL["product"]

    @Num(1)
    quantity?: TProductInstanceGQL['quantity']

    @Str('')
    variant_id?: TProductInstanceGQL['variant_id']

    @HasOne(() => ProductVariantModel, "id", 'variant_id')
    variant?: TProductInstanceGQL["variant"]
}

export default ProductInstanceModel
export {ProductInstanceModel as TProductInstanceModel}
