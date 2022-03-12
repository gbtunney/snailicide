import { Model} from '@vuex-orm/core'
import {ProductImage,ProductVariant,GUID, IProduct} from "./";

export class Product extends Model implements IProduct{
    static entity = 'products'

    static fields (){
        return {
            id: this.attr(''),
            type: this.string(''),
            handle: this.string(''), ///already a slug
            title: this.string(''),
            available:this.boolean(false),

            productType: this.string(''),
            vendor: this.string(''),
            tags: this.attr([] ), //need to split.

            createdAt: this.string(''),
            updatedAt:this.string(''),
            publishedAt:this.string(''),

            description: this.string(''),
            descriptionHtml: this.string(''),

           images: this.hasMany(ProductImage, "product_id"),
        variants: this.hasMany(ProductVariant, "product_id"),

        }
    }
    //ShopifyGraphQLItem
    id!: GUID
    type!:string

    handle!:string
    title!:string
    available!:boolean

    productType!:string
    vendor!: string
    tags!: string[]
    onlineStoreUrl!: string //url

    createdAt!:Date
    updatedAt!:Date
    publishedAt!:Date

    description!:string

    images!: ProductImage[]
    variants!: ProductVariant[]
}
export default Product
