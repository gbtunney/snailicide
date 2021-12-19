import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {replaceCharacters} from './_replaceCharacters'
import {trimCharacters} from './_trimCharacters'
import {
    lowerCase,
    upperCase,
    camelCase,
    unCamelCase,
    properCase,
    pascalCase,
    sentenceCase,
    slugify,
    hyphenate,
    unhyphenate,
    underscore,
    removeNonWord
} from './../string'
import {cleanBooleanType, cleanIntegerType} from "@/scripts/_type";


export const TRANSFORM_FUNCTIONS = {
    trim: trimCharacters,
    clean: replaceCharacters,
    stringToInt: cleanIntegerType,
    parseInt: cleanIntegerType,
    parseBool: cleanBooleanType,
    case_sensitive: lowerCase,
    lowerCase,
    upperCase,
    camelCase,
    unCamelCase,
    properCase,
    pascalCase,
    sentenceCase,
    slugify,
    hyphenate,
    unhyphenate,
    underscore,
    removeNonWord
}
/**
 * transformString
 * @param {boolean | string | number} value - single value
 * @param {boolean|string|array<string>} [d=[' ']] blacklist
 * @param {operations}[d=['["trim", "clean","stringToInt"]']] operations list
 * *@param {object} [o] funcLookup - this is a object of functions ( for internal use )
 * @return {boolean | string | number} returns transformed string.
 * @example
 *      transformString("spynx sucks", [" "],["sentenceCase", "clean"])
 *      =>"Spynxsucks"
 */

export const transformString = function (value: boolean | string | number = true,
                                         blacklist: boolean | string | Array<string | boolean> = [' '],
                                         operations: any = ["trim", "clean", "stringToInt"],
                                         funcLookup: any = TRANSFORM_FUNCTIONS) {
    if (RA.isNotString(value) || R.isEmpty(operations)) return value
    let operationsObj = {}
    if (RA.isPlainObj(operations)) operationsObj = Object.assign(operations)
    else operationsObj = RA.ensureArray(operations).reduce((accumulator, currentValue) => {
        return (RA.isString(currentValue))
            ? {...accumulator, [currentValue]: Object.assign({blacklist})}
            : accumulator
    }, {});
    const RESULT = Array.from(Object.entries(operationsObj)).reduce((accumulator, [key, args]) => {
        let func: any = false
        if (RA.isFunction(key)) func = key
        else if (RA.isString(key)
            && R.has(key)(funcLookup)
            && R.propIs(Function, key, funcLookup)) func = R.prop(key, funcLookup)
        const ARGS = RA.isPlainObj(args) ?
            Object.values(Object.assign({blacklist}, args))
            : [...RA.ensureArray(args)]
        return (func !== false) ? func(accumulator, ...ARGS) : accumulator
    }, value);
    return RESULT
}

/**
 * transformStringAll - Transforms a batch of strings
 * @param {Array| Object | boolean | string | number} value - single value
 * @param {*}  args - parses values along to transform string
 * @return {Array| Object  | boolean | string | number} returns batch ( or single ) transformed string.
 * @example
 *      transformString("spynx sucks", [" "],["sentenceCase", "clean"])
 *      =>"Spynxsucks"
 */
export function transformStringAll(value: any = true,
                                   ...args: any) {
    if (RA.isBoolean(value) || R.isEmpty(value)) return false
    let _keys = (RA.isPlainObj(value)) ? Array.from(Object.keys(value)) : false
    let workingArr = (RA.isPlainObj(value)) ? Array.from(Object.values(value)) : RA.ensureArray(value)
    const RESULT = workingArr.map(function (_str) {
        return transformString(_str, ...args)
    })
    return (_keys === false)
        ? (RA.isArray(value) && RESULT.length > 1)
            ? RESULT
            : (RESULT.length === 1) ? RESULT[0] : false
        : R.zipObj(_keys, RESULT);
}
