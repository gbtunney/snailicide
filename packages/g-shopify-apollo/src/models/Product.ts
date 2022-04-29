import * as RA from "ramda-adjunct"
import {composeGid} from '@shopify/admin-graphql-api-utilities';
import {getDigitCount, isInteger, toInteger} from '@snailicide/g-library'
import {Bool, HasMany, Model, Repository, Str} from '@vuex-orm/core'
import {ProductOptionModel} from './ProductOption'
import {ProductVariantModel} from "./ProductVariant";
import {ProductImageModel} from "./ProductImage";
/* * TYPES   GENERSTED * */
import {TProductGQL, TProductGQLPartial} from "./../types/generated";
import {isNotUndefined} from "./../types";
import {tg_isNilOrEmpty} from "./../types/utilities";
import {useStore} from "vuex";
import ProductInstanceRepository from "@/repository/ProductInstanceRepository";
import {Vue} from "vue-property-decorator";
import { mapRepos } from '@vuex-orm/core'
export class ProductModel extends Model implements TProductGQLPartial {
    static entity = 'products'
    static primaryKey = 'id'

    @Str('')
    id!: TProductGQL["id"]

    @Str('Product')
    __typename?: "Product"

    @Str('')
    handle!: TProductGQL["handle"]

    @Str('title')
    title!: TProductGQL["title"]

    @Bool(false)
    available!: TProductGQL["availableForSale"]

    @Str(' ')
    productType!: TProductGQL["productType"]

    @HasMany(() => ProductOptionModel, 'product_id')
    options?: TProductGQL["options"]

    @HasMany(() => ProductVariantModel, 'product_id')
    Variants!: TProductGQL["Variants"]

    @HasMany(() => ProductImageModel, 'product_id')
    Images!: TProductGQL["Images"]

    //************** GETTERS  *****************//
    get gid(): TProductGQL["gid"] {
        return (this.id && this.id.length > 0) ? atob(this.id) : this.id
    }

    get cacheID(): TProductGQL['cacheID'] {
        return `${this.__typename}:${this.id}`
    }

    //************** INSTANCE METHODS  *****************//
    /*Images
    Variants
    Options
    getOption
    getOptionValueList*/

    /**
     * Get a Variant by a Integer
     * @param { number } index - Possible: Position | ArrayIndex
     * @return { ProductVariant | undefined }
     */
    getVariantByIndex(index = 0) {
        if (RA.isInteger(index) && index <= this.Variants.length) {
            // is within range of array length
            ///first check positions :: THIS ASSUMES POSITION STARTS AT 0
            const found_by_position = this.Variants.find((variant) => {
                if (index === variant.position) return true
            })
            return isNotUndefined(found_by_position)
                ? found_by_position
                : this.Variants[index]
        }
    }

    /**
     * Get a Variant by a UNIQUE Attribute
     * @param { string | number } value - unique attribute
     * Possible attributes
     * String == ID | GID | SID | HANDLE
     * Integer == Position | Index | SID
     * @return { ProductVariant | undefined }
     */
    getVariantByUnique(index: number | string = 1,_test : Repository<ProductVariantModel>|undefined = undefined) {

        if ( _test &&  ! this.Variants?.length ){
            console.log("56hhhhjjhjhjhjjh",_test.all())
        }
         //return if no variants available on product
        if (tg_isNilOrEmpty(this.Variants)) return undefined

        //if index is an integer masquerading as a string , cast.
        if (RA.isString(index) && isInteger(index))
            index = toInteger(index) as number

        // if it is still  a  INTEGER after conversion, its either
        /* - Position
           - Variant array index
           - SID
         */
        if (RA.isInteger(index)) {
            // SID ::: then Compose GID, cast back to string
            if (getDigitCount(index) >= 9) {
                index = composeGid("ProductVariant", index) as string
            }
            // Position OR index :::: RETURN Variant
            else if (this.getVariantByIndex(index)) return this.getVariantByIndex(index)
        }
        // if it is still  a string after conversions,
        // assume either
        /* - ID
           - GID
           - HANDLE ( slugified title )
         */
        if (RA.isString(index)) {
            const id_or_handle: string = (index).toString()
            const found_by_id = this.Variants.find((variant) =>
                (id_or_handle === variant.id || btoa(id_or_handle) === variant.id))

            return (found_by_id !== undefined)
                /// FOUND BY ID | GID
                ? found_by_id
                /// FOUND BY HANDLE
                : this.Variants.find((variant) =>
                    (id_or_handle === variant.handle))
        }
    }
}

export default ProductModel
export {ProductModel as TProductModel}
