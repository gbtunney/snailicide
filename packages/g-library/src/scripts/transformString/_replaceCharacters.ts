import * as RA from "ramda-adjunct";
import * as R from "ramda";
import {isInteger, toInteger} from "@/scripts/_type";

/* * Function replaceCharacters * * * *
* @param { Boolean | String | Number } - single value
* @param {Boolean | string|array<string>} blacklist (list)-character blacklist (single character only)
* @param {boolean} [d=false] trimStart - flag: trim characters at start of string ( see: RA.trimCharsStart )
* @param {boolean} [d=false] trimEnd - flag: trim characters at end of string ( see: RA.trimCharsEnd )
* @param {boolean} [d=true] parseIntFlag - if return value is a int, return as number
* @return {string}- trimmed string */
export const replaceCharacters = function (value: boolean | string | number = true,
                                           blacklist: boolean | string | Array<string | boolean> = ' ',
                                           replace_string: boolean | string = true,
                                           parseIntFlag: boolean = true) {
    if (RA.isNotString(value) || R.isEmpty(blacklist) || !replace_string) return value
    replace_string = (replace_string === true)
        ? ""
        : (RA.isString(replace_string))
            ? replace_string
            : false
    if (replace_string === false) return value
    const result = RA.ensureArray(blacklist).reduce((accumulator, currentValue) => {
        // @ts-expect-error
        return RA.replaceAll((currentValue).toString(), replace_string, accumulator)
    }, (value).toString());
    return (parseIntFlag === true && isInteger(result)) ? toInteger(result) : result
}
export default replaceCharacters
