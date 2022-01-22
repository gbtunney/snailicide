export type  { PlainObject } from "./types";

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
    underscore,
    removeNonWord,
    normalizeLineBreaks,
    replaceAccents,
    escapeRegExp,
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
} from './scripts/_type'
export {registerGlobalVariable} from './scripts/_vue-helpers'
export {getPaths} from './scripts/_paths'
export {randomInt,getRandomNumber,getDigitCount,formatCurrency} from './scripts/_number'
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
