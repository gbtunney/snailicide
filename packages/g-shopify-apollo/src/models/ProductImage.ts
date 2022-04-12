import {Product, ProductVariant,ProductImage as TProductImage} from ".";
import {Model, Attr, Str, Num, BelongsTo, HasMany} from '@vuex-orm/core'

//todo: switch these classes.
export class ProductImage extends Model implements TProductImage {
    static entity = 'productimages'

    @Attr(undefined)
    id!: TProductImage["id"]

    @Str('')
    type: 'Image' = 'Image'

    @Str('')
    alt: TProductImage['alt']

    @Str('')
    src!: TProductImage['src']

    @Num(1)
    position: TProductImage['position']

    @Num(500)
    width: TProductImage['width']

    @Num(500)
    height: TProductImage['height']

    @Str('')
    product_id: TProductImage['product_id']

    @BelongsTo(() => Product, 'product_id')
    product: TProductImage['product']

    @HasMany(() => ProductVariant, 'image_id')
    variants: TProductImage['variants']
}

export default ProductImage
export {ProductImage as ProductImageType}

