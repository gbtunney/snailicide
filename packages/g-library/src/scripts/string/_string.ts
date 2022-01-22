export const stringContainsNumber = (value:string) => /\d/.test(value)

export const stringContainsLetter = (value:string) => (value).length === 1 && value.match(/[a-z]/i)

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
