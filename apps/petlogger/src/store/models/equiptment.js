/* asin
    brand
    description
    dimensions
    title
    variantTitle
    keywords*/

import { Model } from '@vuex-orm/core'

export default class Product extends Model {
    static entity = "products"
    static fields() {
        return {
            id: this.uid(),
            title: this.string(null).nullable(),
            variantTitle: this.string(null).nullable(),
            asin: this.string(null).nullable(),
            brand: this.string(null).nullable(),
            description: this.string(null).nullable(),
            keywords: this.attr(null).nullable(),
        }
    }
}
