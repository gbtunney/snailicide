import {Product, ProductVariant, GUID,IImage} from "./";
import { Model,Attr,Str,Num,BelongsTo,HasMany } from '@vuex-orm/core'
//todo: switch these classes.
export class ProductImage extends Model implements IImage {
    static entity = 'productimages'

    @Attr(undefined)
    id!: GUID

    @Str('')
    type!:string

    @Str('')
    alt?: string

    @Str('')
    src!: string

    @Num(1)
    position!: number

    @Num(500)
    width!: number

    @Num(500)
    height!: number

    @Attr(undefined)
    product_id!: GUID

    @BelongsTo(() => Product, 'product_id')
    product!: Product

    @HasMany(() => ProductVariant, 'image_id')
    variants!: ProductVariant[]
}

export default ProductImage
