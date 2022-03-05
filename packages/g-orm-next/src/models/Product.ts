import {Attr, Model} from '@vuex-orm/core'
import Image from './Image'
import { Str, HasMany,BelongsTo } from '@vuex-orm/core'
import ShopifyBuy,{Product as IProduct,Option,ProductVariant} from 'shopify-buy'

export class Product extends Model {
    static entity = 'products'

   /* static fields () {
        return {
            id: this.attr(''),
            description: this.attr('')
        }
    }
*/
    /**
     * Product unique ID
     */
    @Attr(null)
    id!: number | string

    @Str(null)
    title!: string;

    @Str(null)
    description!: string;

    @Str(null)
    vendor!: string;

    /**
     * An Array of Objects that contain meta data about an image including src of the images.
     */
    @HasMany(() => Image, 'product_id')
    images!: Array<Image>


    /**
     * An Array of Objects that contain meta data about an image including src of the images.
     */
  //  images!: Array<Image>;

    //title!: string;

    /**
     * The product’s vendor name
     */


   // HasMany

   /* @Attr(null)
    userId!: number | null

    @Str('')
    title!: string

    @Str('')
    body!: string

    @Attr(null)
    published!: number | null

    @BelongsTo(() => User, 'userId')
    author!: User*/

    // `this.belongsTo(...)` declares this post belongs to a user. The first
    // argument is the `User` model class. The second is the field name for
    // the foreign key `userId`.

}
export default Product
