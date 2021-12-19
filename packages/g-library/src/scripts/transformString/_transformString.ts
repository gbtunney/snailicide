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
import {cleanIntegerType} from "@/scripts/_type";
import {stringContainsNumber} from "@/scripts/_string";

const stringToInt=cleanIntegerType

export const TRANSFORM_FUNCTIONS = {
    trim: trimCharacters,
    clean: replaceCharacters,
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

export const transformString = function (value: boolean | string | number = true,
                                         blacklist: boolean | string | Array<string | boolean> = [' '],
                                         operations: any = ["trim", "clean"],
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
