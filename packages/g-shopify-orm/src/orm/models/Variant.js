/* * Variant *
* @model  - Variant
* @entity  - variants */

import {R, Model, getRandomNumber, randomInt, slugify, toInteger, isShopifyID, settings, options} from "./imports"
import {Product, ProductImage, ProductOptionValue, VariantOption} from "./"

const {UID_LENGTH, MINIMUM_QUANTITY} = settings

//************** End Imports *****************//

export class Variant extends Model {
    static entity = 'variants';

    static beforeCreate(model) {
        const temp_option_array = []
        if (model.option1) temp_option_array.push(`[${model.product_id},"${model.option1}"]`);
        if (model.option2) temp_option_array.push(`[${model.product_id},"${model.option2}"]`);
        if (model.option3) temp_option_array.push(`[${model.product_id},"${model.option3}"]`);
        model.option_ids = temp_option_array;
    }

    static fields() {
        return {
            id: this.uid(() => getRandomNumber(UID_LENGTH)),
            // handle: maybe generate a slug from options??
            title: this.string(null),
            position: this.number(null), //the index  ///set this to increment?
            price: this.number(false),
            inventory_quantity: this.number(22),
            inventory_management: this.string(null),
            sku: this.string(null),
            available: this.boolean(false),
            product_id: this.number(null), // TODO: keeping this as a STRING (bc generic doesnt work wtf) type BC possibble string/int clash with shopify
            image_id: this.number(null),

            option_ids: this.attr([]),
            options: this.hasManyBy(ProductOptionValue, "option_ids", "$id"),

            option1: this.string(null, value => slugify(value)),  //todo: NEEDS TO BE MADE NULLABLE!!!!!!!!!
            option2: this.string(null, value => slugify(value)),   //todo: Needs to be switched to array via function
            option3: this.string(null, value => slugify(value)),   //todo: Needs to be switched to array via function

            Product: this.belongsTo(Product, 'product_id'),
            image: this.hasOne(ProductImage, 'id', "image_id"),
        }
    }

    //TODO: GILLIAN NOTES this.$query().all();
    get pivots() {
        const variant_id = this.id
        const {image_id} = this
        const thumbbnail_id = (image_id) ? image_id : false
        return this.options.map(function (option_value) {
            return {
                variant_id,
                thumbbnail_id,
                option_value_id: option_value.id,
            }
        })
    }

    get Price() {
        return (this.price <= 0) ? "free" : `$${this.price}`
    }

    get Image() {
        //only pulls the image once.
        const _id = this.id;
        if (this.image) return this.image;
        const result = ProductImage.query().whereHas('Variants', (query) => {
            query.where('id', _id)
        }).with('Variants').first()
        /* if (result && result.id){
           this.$update({
             id: _id,
             image_id: result.id
           })
           return result
         }*/
        return result;
    }

    get IsDigital() {
        if (this.inventory_management == null || this.inventory_management == false || this.available) return true;
        else if (this.inventory_quantity >= MINIMUM_QUANTITY) return true;
        return false;
    }

    get IsAvailable() {
        if (this.inventory_management == null || this.inventory_management == false || this.available) return true;
        else if (this.inventory_quantity >= MINIMUM_QUANTITY) return true;
        return false;
    }

    getOptionValueIndexedBy(index_by = "parent_handle") {
        return R.indexBy(R.prop(index_by), this.options);
    }

    getOptionValue(value, index_by = "parent_handle") {
        const map = new Map(Object.entries(this.getOptionValueIndexedBy(index_by)))
        return (map.get(value)) ? map.get(value) : false;
    }
}

export default Variant
