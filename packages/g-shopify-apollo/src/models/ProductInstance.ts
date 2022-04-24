import {BelongsTo, HasOne, Model, Num, Str, Uid} from "@vuex-orm/core";
import {ProductInstance as TProductInstance} from "./../types/generated/storefront-types";
import {Product} from "./Product";
import {ProductVariant} from "./ProductVariant";
import ProductGroup from "./ProductGroup"

export class ProductInstance extends Model implements Partial<TProductInstance> {
    static entity = 'productinstance'
    static primaryKey = 'id'

    @Uid()
    id!: string

    @Str('')
    __typename: 'ProductInstance' = 'ProductInstance'

    @Str('')
    group_id?: TProductInstance['group_id']

    @BelongsTo(() => ProductGroup, "id", 'group_id')
    group?: TProductInstance["group"]

    @Str('')
    product_handle?: TProductInstance['product_handle']

    @HasOne(() => Product, 'handle', 'product_handle')
    product?: TProductInstance["product"]

    @Num(1)
    quantity?: TProductInstance['quantity']

    @Str('')
    variant_id?: TProductInstance['variant_id']

    @HasOne(() => ProductVariant, "id", 'variant_id')
    variant?: TProductInstance["variant"]
}

export default ProductInstance
export {ProductInstance as ProductInstanceType}
