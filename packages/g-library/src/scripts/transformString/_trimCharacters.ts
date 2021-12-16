import * as RA from "ramda-adjunct"
import * as R from "ramda"
import {isInteger, toInteger} from "@/scripts/_type";

/* * Function trimCharacters * * * *
* @param { Boolean | String | Number } - single value
* @param {Boolean | string|array<string>} blacklist (list)-character blacklist (single character only)
* @param {boolean} [d=false] trimStart - flag: trim characters at start of string ( see: RA.trimCharsStart )
* @param {boolean} [d=false] trimEnd - flag: trim characters at end of string ( see: RA.trimCharsEnd )
* @param {boolean} [d=true] parseIntFlag - if return value is a int, return as number
* @return {string|number} - trimmed string (or number if parseInt == true */

export const trimCharacters = function (value: boolean | string | number = true,
                                        blacklist: boolean | string | Array<string | boolean> = ' ',
                                        trimStart: boolean = true,
                                        trimEnd: boolean = true,
                                        parseIntFlag: boolean = true) {
    if (RA.isNotString(value) || R.isEmpty(blacklist)) return value
    blacklist = RA.ensureArray(blacklist).map(function (_char) {
        if (RA.isString(_char) && RA.isNotEmpty(_char)) {
            const char = (_char).toString()
            if (char.length !== 1) {
                const errorMsg = `blacklist value: "${char}" will be truncated to "${char.charAt(0)}"`
                console.warn("****** charTrim can only accept single characters for blacklist \n", errorMsg)
            }
            return char.charAt(0)
        }
        return false
    })
    const result = [...(trimStart) ? [RA.trimCharsStart] : [], ...(trimEnd) ? [RA.trimCharsEnd] : []]
        .reduce((accumulator, currentValue) => {
            // @ts-expect-error
            return (RA.isBoolean(blacklist)) ? accumulator : currentValue(blacklist, accumulator)
        }, (value).toString());
    return (parseIntFlag === true && isInteger(result)) ? toInteger(result) : result
}
export default trimCharacters
