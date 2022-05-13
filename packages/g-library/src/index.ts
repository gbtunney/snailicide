export {get} from "./types";

export {
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
    truncate,
    stripHtmlTags,
    underscore,
    removeNonWord,
    normalizeLineBreaks,
    replaceAccents,
    escapeHtml,
    unescapeHtml,
    escapeUnicode,
    stringContainsNumber,
    stringContainsLetter
} from './scripts/string'

export {
    cleanIntegerType,
    cleanBooleanType,
    toInteger,
    isInteger,
} from './scripts/_valueTypes'

export {randomInt, getRandomNumber, getDigitCount, formatCurrency} from './scripts/_number'

export {
    replaceCharacters,
    trimCharacters,
  //  transformString,
    /* transformStringAll,*/
    validateString,
    validateStringBatch,
    startsWith,
    endsWith,
    includes,
    eq,
    contains,
    match

} from './scripts/transformString'

export type {
    EmptyObject,
    PlainObject,
    EmptyString,
    Primitive,
    Falsy,
    NilOrEmpty,
    NilLike,
    Nullish,
    DeepPartial,
} from "./types/utilities"

export type{CSSColorSpecialProp} from "./types";
export {tg_isCSSColorSpecial, tg_isNotCSSColorSpecial} from "./types";

/* * TYPEGUARDS!!!!!! * */
export {
    tg_isFalsy,
    tg_isTruthy,
    tg_isNilOrEmpty,
    tg_isNotNilOrEmpty,
    tg_isEmptyString,
    tg_isPrimitive,
    tg_isNotPrimitive,
    tg_isNilLike,
    tg_isNotNilLike,
    tg_isNullish,
    tg_isNotNullish,
    tg_isUndefined,
    tg_isNotUndefined
} from './types//utilities'


/*
export {registerGlobalVariable} from './scripts/_vue-helpers'
export {getPaths} from './scripts/_paths'
export {mergeOptions} from './scripts/_object'
export {
    transformExplodeArray,
    replaceCharacters,
    trimCharacters,
    transformString,
    transformStringAll,
    validateString,
} from './scripts/transformString'
export {importantConsoleLog} from "./scripts/_console"
*/
