// {isVariantAvailable, isShopifyID, isGetMaxQuantity, shopifyMediaURL }
import * as RA from "ramda-adjunct"
import {getDigitCount, toInteger,isInteger,tg_isNotUndefined,tg_isUndefined} from "@snailicide/g-library";

/**
 * isShopifyID
 * @param {*} value - value to validate
 * @param {number} min_digits
 * @return {boolean} bool if invalid
 * - isInteger = true AND value > 9 digits */
export function isShopifyID(
  value: boolean | number | string = false,
  min_digits = 9
) {
  if (!isInteger(value)) return;
  return getDigitCount(value as number) >= min_digits ? true : false;
}

/**
 * ShopifyMediaURL
 * @constructor
 * @param {boolean|string} src - Shopify Image url. (usually from ProductImage)
 * @param {string}  - dimensions '100x100'
 * @param {string}- crop values : top, center,bottom,left, right
 * @return {string} - url. ? needs validate?
 * bc they make it a pain in the ass to get a specific size image. IDEA? maybe do aspect ratio instead
 */
export function ShopifyMediaURL(src:string|undefined = undefined,
                                width :number|undefined = undefined,
                                height:number|undefined = undefined,
                                crop = false,
                                scale=false) : string|undefined {

   if (tg_isNotUndefined(src) ){

       let url_string = ''

       if (tg_isUndefined(width) && tg_isUndefined(height)) {
           url_string = ''
       }else{
           url_string = `${  ( tg_isNotUndefined(width) ) ? width : '' }x${  ( tg_isNotUndefined(height) ) ? height : '' }`
       }
       if ( crop ){
           url_string=`${url_string}_crop_${crop}`
           // console.log("CROP IS ", crop,str)
       }
       // remove any current image size then add the new image size
       return src
           .replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, '.')
           .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function (match) {
               return '_' + url_string + match;
           });
   }
   return undefined
}
