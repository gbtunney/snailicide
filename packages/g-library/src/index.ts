export type {PlainObject} from "./types";
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
    transformString,
    transformStringAll,
    validateString,
    validateStringBatch
} from './scripts/transformString'

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
