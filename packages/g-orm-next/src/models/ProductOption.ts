import {Product, ProductVariant, GUID, IProductOption, IProductOptionValue, IVariantOption, ProductImage} from "./";
import { Uid,Model,Attr,Str,Num,BelongsTo,HasMany } from '@vuex-orm/core'
//todo: switch these classes.
export class ProductOptionValue extends Model implements IProductOptionValue {
    static entity = 'productoptionvalue'
    static primaryKey = ['option_id', 'position']
    @Uid()
    id!: string

    @Str('')
    type!:string

    @Str('')
    handle!: string

    @Str( '')
    title!: string

    @Num(1)
    position!: number

    @Attr(undefined)
    product_id!: GUID

    @BelongsTo(() => Product, 'product_id')
    product!: Product

    @Str( '')
    parent_handle!: string

    @Attr(undefined)
    option_id!: string

    @BelongsTo(() => ProductOption, 'option_id')
    option!: ProductOption
}


export class ProductOption extends Model implements IProductOption {
    static entity = 'productoption'

    @Uid()
    id!: GUID

    @Str('')
    type!:string

    @Str('')
    handle!: string

    @Str( '')
    title!: string

    @Num(1)
    position!: number

    @Attr(undefined)
    product_id!: GUID

    @BelongsTo(() => Product, 'product_id')
    product!: Product

    @HasMany(() => ProductOptionValue, 'option_id')
    values!: ProductOptionValue[]

}

export default ProductOption
