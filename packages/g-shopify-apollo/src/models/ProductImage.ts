import {BelongsTo, HasMany, Model, Num, Str} from '@vuex-orm/core'
import {ProductModel} from "./Product";
import {ProductVariantModel} from "./ProductVariant";

import {TProductImageGQL,TProductImageFragment,TProductImageGQLPartial,TProductImageFragmentPartial} from "./../types/generated";

export class ProductImageModel extends Model implements TProductImageGQLPartial {
    static entity = 'productimages'

    @Str('')
    id!: TProductImageGQL["id"]

    @Str('Image')
    __typename?: 'Image'

    @Str('')
    altText!: TProductImageGQL["altText"]

    @Str('')
    src!: TProductImageGQL['src']

    @Num(1)
    position!: TProductImageGQL['position']

    @Num(500)
    width!: TProductImageGQL['width']

    @Num(500)
    height!: TProductImageGQL['height']

    @Str('')
    product_id!: TProductImageGQL['product_id']

    @BelongsTo(() => ProductModel, 'product_id')
    product!: TProductImageGQL["product"]

    @HasMany(() => ProductVariantModel, 'image_id')
    variants!: TProductImageGQL['variants']
}

export default ProductImageModel
export {ProductImageModel as TProductImageModel}

