import {Product, ProductVariant,TProductImageFragment} from ".";
import {Model, Attr, Str, Num, BelongsTo, HasMany} from '@vuex-orm/core'

//todo: switch these classes.
export class ProductImage extends Model implements TProductImageFragment {
    static entity = 'productimages'

    @Attr(undefined)
    id!: TProductImageFragment["id"]

    @Str('')
    type: 'Image' = 'Image'

    @Str('')
    alt: TProductImageFragment['alt']

    @Str('')
    src!: TProductImageFragment['src']

    @Num(1)
    position: TProductImageFragment['position']

    @Num(500)
    width: TProductImageFragment['width']

    @Num(500)
    height: TProductImageFragment['height']

    @Str('')
    product_id: TProductImageFragment['product_id']

    @BelongsTo(() => Product, 'product_id')
    product: TProductImageFragment['product']

    @HasMany(() => ProductVariant, 'image_id')
    variants: TProductImageFragment['variants']
}

export default ProductImage
