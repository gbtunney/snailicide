/* * ProductImage *
* @model  - ProductImage
* @entity  - productimages */
import {R, Model, getRandomNumber, randomInt, slugify, toInteger, isShopifyID, settings, options} from "./imports"
import {Product} from './'
import Variant from './Variant'

const {UID_LENGTH} = settings

export class ProductImage extends Model {
    static entity = 'productimages'

    static fields() {
        return {
            id: this.uid(() => getRandomNumber(UID_LENGTH)),
            position: this.number(null),
            alt: this.string(null),
            width: this.number(500),
            height: this.number(500),
            src: this.string(null),
            product_id: this.number(null),
            variant_ids: this.attr(null), //array of numbers

            ///*******CALCULATED FIELDS
            Product: this.belongsTo(Product, 'product_id'),
            Variants: this.hasManyBy(Variant, 'variant_ids')
        }
    }

    get aspect_ratio() {
        return parseInt(this.width) / parseInt(this.height);
    }

    get srcset() {
        return {
            "desktop": {
                "url": this.getSrc(1000, 1200)
            },
            "mobile": {
                "url": this.getSrc(200, 200)
            },
            "zoom": {
                "url": this.getSrc(2000, 2000)
            },
            "alt": this.alt
        }
    }

    /** Static  Methods  */
    getSrc(...args) {
        return ShopifyMediaURL(this.src, ...args);
    }
}

export default ProductImage
/* SRC SET!!!!!!!!!
    [
      {
            "desktop": {
                "url": "assets/storybook/SfGallery/productB.jpg"
            },
            "mobile": {
                "url": "assets/storybook/SfGallery/productB.jpg"
            },
            "zoom": {
                "url": "assets/storybook/SfGallery/productB.jpg"
            },
            "alt": "Product B"
        }
    ]*/
