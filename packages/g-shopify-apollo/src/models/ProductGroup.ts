import {Bool, HasMany, Model, Num, Str, Uid} from "@vuex-orm/core";

import {TProductGroupGQL, TProductGroupGQLPartial} from "./../types/generated";
import {ProductInstanceModel} from "./ProductInstance";

export class ProductGroupModel extends Model implements TProductGroupGQLPartial {
    static entity = 'productgroup'
    static primaryKey = 'id'// ['parent_handle', 'handle']

    @Uid()
    id!: string

    @Str('')
    __typename: 'ProductGroup' = 'ProductGroup'

    @Num(6)
    max_children?: TProductGroupGQL['max_children']

    @Bool(true)
    add_to_cart_enabled?: TProductGroupGQL['add_to_cart_enabled']

    @Bool(false)
    available?: TProductGroupGQL['available']

    @HasMany(() => ProductInstanceModel, "group_id", 'id')
    items!: TProductGroupGQL["items"]
}

export default ProductGroupModel
export {ProductGroupModel as TProductGroupModel}
