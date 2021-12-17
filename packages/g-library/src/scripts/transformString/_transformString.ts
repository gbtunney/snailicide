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
import {isInteger, toInteger} from "@/scripts/_type";

export const TRANSFORM_FUNCTIONS = {
    trim: trimCharacters,
    clean: replaceCharacters,
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
//batch transform string
export const transformString = function (value: boolean | string | number = true,
                                         blacklist: boolean | string | Array<string | boolean> = [' '],
                                         operations: any = ["trim", "clean"],
                                         funcLookup: any = TRANSFORM_FUNCTIONS) {
    if (RA.isNotString(value) || R.isEmpty(blacklist) || R.isEmpty(operations)) return value
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
