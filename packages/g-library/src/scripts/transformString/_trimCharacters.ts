import * as RA from "ramda-adjunct"
import * as R from "ramda"
import {isInteger, toInteger} from "@/scripts/_type";

/* * Function trimCharacters * * * *
* @param { boolean | string | number } - single value
* @param { boolean | string | Array<string | boolean> } blacklist (list)-character blacklist
* @param { boolean } [d=true] parseIntFlag - if return value is a int, return as number
* @param {boolean} [d=true] trimStart - flag: trim characters at start of string ( see: RA.trimCharsStart )
* @param {boolean} [d=true] trimEnd - flag: trim characters at end of string ( see: RA.trimCharsEnd )
* @param {boolean} [d=false] truncate_bl_char name - truncate blacklist characters longer than 0
* @return {boolean|string|number} - trimmed string (or number if parseInt == true */

export const trimCharacters = function (value: boolean | string | number = true,
                                        blacklist: boolean | string | Array<string | boolean> = ' ',
                                        parseIntFlag: boolean = true,
                                        trimStart: boolean = true,
                                        trimEnd: boolean = true,
                                        truncate_bl_char: boolean = false) {
    if (RA.isNotString(value) || R.isEmpty(blacklist)) return value
    blacklist = RA.ensureArray(blacklist).map(function (_char) {
        if (RA.isString(_char) && RA.isNotEmpty(_char)) {
            const char = (_char).toString()
            if (truncate_bl_char && char.length !== 1) {
                const errorMsg = `blacklist value: "${char}" will be truncated to "${char.charAt(0)}"`
                console.warn("****** charTrim can only accept single characters for blacklist \n", errorMsg)
            }
            return (truncate_bl_char) ? char.charAt(0) : char
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
