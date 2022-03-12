import {Model} from '@vuex-orm/core'
import {Product, ProductImage, GUID, IProductVariant, IPrice} from './'

export class ProductVariant extends Model implements IProductVariant {
    static entity = 'variants'

    static fields() {
        return {
            id: this.attr(''),
            type: this.string(''),
            handle: this.string(''), ///already a slug
            title: this.string(''),
            available: this.boolean(false),

            position: this.number(1),
            sku: this.string(''),
            inventoryQuantity: this.number(0),
            weight: this.number(null).nullable(),

            price: this.number(null),
            priceV2: this.attr(null).nullable(),
            compareAtPrice: this.number(null),
            compareAtPriceV2: this.attr(null).nullable(),
            unitPrice: this.attr(null).nullable(),


            product_id: this.attr(null),
            // image_id:this.attr(null),

            Product: this.belongsTo(Product, "product_id"),
            testfield: this.string("tessst"),
            image: this.hasOne(ProductImage, "variant_ids"),
        }
    }

    //ShopifyGraphQLItem
    id!: GUID
    type!: string
    handle!: string
    title!: string
    available!: boolean

    position!: number
    sku!: string
    inventoryQuantity!: number
    weight!: number

    price!: number
    priceV2!: IPrice
    compareAtPrice!: number
    compareAtPriceV2!: IPrice
    unitPrice!: IPrice

    product_id!: GUID
    // image_id!:GUID

    Product!: Product
    image!: ProductImage
}
export default ProductVariant
