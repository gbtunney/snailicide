import * as R from "ramda";
import * as RA from "ramda-adjunct";

export const stringContainsNumber = (value) => /\d/.test((value).toString())

export const stringContainsLetter = (value) => (value).tovalue().length === 1 && (value).toString().match(/[a-z]/i)

/* * Function charTrim * * * *
* @param {string}- string
* @param {string|array<string>} _blacklistCharacters- character blacklist (single character only)
* @return {string}- trimmed string */
export const charTrim = function (value: Boolean | String | Number = true,
                                  _blacklistCharacters: String | Array<string> = [' '],
                                  trimStart: Boolean = true,
                                  trimEnd: Boolean = true) {
    if (RA.isNotString(value) || R.isEmpty(_blacklistCharacters)) return value

    const blacklistCharacters: Array<any> = RA.ensureArray(_blacklistCharacters).map(function (_char) {
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
    return [...(trimStart) ? [RA.trimCharsStart] : [], ...(trimEnd) ? [RA.trimCharsEnd] : []]
        .reduce((accumulator, currentValue) => {
            // @ts-expect-error
            return (RA.isBoolean(blacklistCharacters)) ? accumulator : currentValue(blacklistCharacters, accumulator)
        }, (value).toString());
}
/*
export const parseBlacklist(_blacklist:String | Array<string> = [' ']){
}*/
/* * Function replaceAllChars * * * *
* @param {boolean | string | number } value - the string to transform
* @param {array}- character blacklist
* @param {string}- Replace String - {boolean}==true is empty string "clean"
* @return {string}- trimmed string */
export const replaceAllChars = function (value: Boolean | String | Number = true,
                                         _blacklistCharacters: String | Array<string> = [' '],
                                         _replace_string: Boolean | String = true) {
    if (RA.isNotString(value) || R.isEmpty(_blacklistCharacters) || !_replace_string) return value

    _replace_string = (_replace_string === true)
        ? ""
        : (RA.isString(_replace_string))
            ? _replace_string
            : false

    if (_replace_string === false) return value
    return RA.ensureArray(_blacklistCharacters).reduce((accumulator, currentValue) => {
        // @ts-expect-error
        return RA.replaceAll((currentValue).toString(), _replace_string, accumulator)
    }, (value).toString());
}
/*
enum Color {
    Red,
        Green,
        Blue,
}*/
/*export const transformStringAll = function (value:Boolean | String | Number|Array<string> |Object<any>  = false,
                                            ...args) {
        if (RA.isNotArrayLike(value)  && RA.isNotString(value) ) return value
      //  if ( )
    if (!value || R.isEmpty(value) || RA.isNotPlainObj(flags)) return false
    const FLAGS = flags
    return RA.ensureArray(value).map(function (_str) {
        const testString = (value).toString()
        return transformString(_str, FLAGS);
    })
}*/
/**
 * String Transform Flags
 * @typedef {Object} transform_flags
 * @property {boolean|function} transform - transform Function
 * @property {boolean|array} trim - Trim the ends/start
 * @property {boolean|array} clean - Remove blacklisted characters
 */

/**
 * Transform a string
 * @param {*} value - value
 * @param {transform_flags}  [d= {transform = false,trim = false,clean = false}] value2 - flags
 * @return {*} - description
 * @example
 *      transformString('value')
 */
/*
export function transformString(value = false, flags = DEFAULT_FLAGS) {
    if (!value || RA.isNotPlainObj(flags)) return false
    const {
        transform = false,
        trim = false,
        clean = false
    } = flags
    const testString = (value).toString()
    //console.warn("transformString", "|", testString, (trim === true))
    let modifiedString = testString
    if (clean) modifiedString = replaceAllChars(modifiedString, clean)
    if (trim !== false) modifiedString = charTrim(modifiedString, (trim === true) ? [' '] : trim)
    if (transform && RA.isFunction(transform)) modifiedString = transform(modifiedString)
    return modifiedString
}
*/
