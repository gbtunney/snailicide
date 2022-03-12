import {Model} from '@vuex-orm/core'
import {Product, ProductVariant, GUID, IProductImage} from "./";

export class ProductImage extends Model implements IProductImage {
    static entity = 'productimages'

    static fields() {
        return {
            id: this.attr(''),
            type: this.string(''),

            position: this.number(1),
            alt: this.string(null).nullable(),
            width: this.number(500),
            height: this.number(500),
            src: this.string(null),

            product_id: this.attr(null),
            variant_ids: this.attr(null), //array of numbers

            Product: this.belongsTo(Product, "product_id"),
            Variants: this.hasManyBy(ProductVariant, "variant_ids", "$id")
            /// this.hasManyBy(ProductVariant,"product_id")
        }
    }

    //ShopifyGraphQLItem
    id!: GUID
    type!: string

    position!: number
    alt?: string
    width!: number
    height!: number
    src!: number

    product_id!: GUID
    variant_ids!: GUID[]

    Product!: Product
}

export default ProductImage
