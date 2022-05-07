/* * getCSSString function  * */
import * as RA from "ramda-adjunct";
import {cleanBooleanType,validateString,transformString} from "@snailicide/g-library";

//export const css_blacklist :Array<string> = [" ", ";", "var(", ")"]

export const getCSSString = function (value: string | boolean = false, property: string | boolean  = false):string {
    value = cleanBooleanType(value);
    return (RA.isBoolean(value) || RA.isBoolean(property)) ? "" :`${property}:${value};`
}

/**
 getCssPropertyUnit - cleans css property values
 * @param { string | boolean | number} value - description
 * @param { string | boolean | number} [d=false] defaultvalue - Allows a default value to be assigned if ( value == true )
 * @param {string | boolean} integerUnit - Unit to be appended to a integer like "120px" or % , no change if false
 * @param { string | boolean | Array<string | boolean> } [d= [" ", ";", "var(", ")"] ] blacklist - blacklisted characters
 * @return {string | boolean} css value
 * @example
 *      getCssPropertyUnit('value')
*/
export function getCssPropertyUnit(value: string | boolean | number,
                                   defaultvalue: string | boolean | number = false,
                                   integerUnit: string | boolean = "px",
                                   blacklist: string | boolean | Array<string | boolean> = [" ", ";", "var(", ")"]
                                   ): string | boolean {
    value = (cleanBooleanType(value) === true) ? defaultvalue : cleanBooleanType(value);
    if (RA.isBoolean(value)) return false
    const cleanedPropertyString = transformString(value, blacklist)
    if (RA.isInteger(cleanedPropertyString)){
        return ( RA.isNotBoolean(integerUnit) ) ? `${cleanedPropertyString}${integerUnit}`: `${cleanedPropertyString}`
    }
    if (validateString(cleanedPropertyString, "--", "startsWith")) return `var(${cleanedPropertyString})`
    return cleanedPropertyString
}

export const FunctionMixins = {
  methods:{
      getCSSString,
  }
}
export default FunctionMixins
