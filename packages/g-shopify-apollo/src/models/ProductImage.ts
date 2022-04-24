import {BelongsTo, HasMany, Model, Num, Str} from '@vuex-orm/core'
import {Product} from "./Product";
import ProductVariant from "./ProductVariant";
import {ProductImage as TProductImage} from "./../types"

export class ProductImage extends Model implements Partial<TProductImage> {
    static entity = 'productimages'

    @Str('')
    id!: TProductImage["id"]

    @Str('Image')
    __typename?: 'Image'

    @Str('')
    altText!: TProductImage["altText"]

    @Str('')
    src!: TProductImage['src']

    @Num(1)
    position!: TProductImage['position']

    @Num(500)
    width!: TProductImage['width']

    @Num(500)
    height!: TProductImage['height']

    @Str('')
    product_id!: TProductImage['product_id']

    @BelongsTo(() => Product, 'product_id')
    product!: TProductImage["product"]

    @HasMany(() => ProductVariant, 'image_id')
    variants!: TProductImage['variants']
}

export default ProductImage
export {ProductImage as ProductImageType}

