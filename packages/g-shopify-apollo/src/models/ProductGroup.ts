import {Bool, HasMany, Model, Num, Str, Uid} from "@vuex-orm/core";
import {ProductGroup as TProductGroup} from "./../types/generated/storefront-types";
import {ProductInstance} from "./ProductInstance";

export class ProductGroup extends Model implements Partial<TProductGroup> {
    static entity = 'productgroup'
    static primaryKey = 'id'// ['parent_handle', 'handle']

    @Uid()
    id!: string

    @Str('')
    __typename: 'ProductGroup' = 'ProductGroup'

    @Num(6)
    max_children?: TProductGroup['max_children']

    @Bool(true)
    add_to_cart_enabled?: TProductGroup['add_to_cart_enabled']

    @Bool(false)
    available?: TProductGroup['available']

    @HasMany(() => ProductInstance, "group_id", 'id')
    items!: TProductGroup["items"]
}

export default ProductGroup
export {ProductGroup as ProductGroupType}
