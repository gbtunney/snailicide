import * as RA from "ramda-adjunct";
import * as R from "ramda";
import {isInteger, toInteger} from "@/scripts/_type";

/* * Function replaceCharacters * * * *
* @param { boolean | string | number } - single value
* @param { boolean | string | Array<string | boolean> } blacklist (list)-character blacklist
* @param { boolean } [d=true] parseIntFlag - if return value is a int, return as number
* @param {boolean} [d=true] replace_string - if true, default is "" empty string or string with new characters
* @return { boolean | string | number }- trimmed value */
export const replaceCharacters = function (value: boolean | string | number = true,
                                           blacklist: boolean | string | Array<string | boolean> = ' ',
                                           parseIntFlag: boolean = true,
                                           replace_string: boolean | string = true) {
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
