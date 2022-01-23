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
} from './src/scripts/string'

export {
    cleanIntegerType,
    cleanBooleanType,
    toInteger,
    isInteger,
} from './src/scripts/_valueTypes'
export {registerGlobalVariable} from './src/scripts/_vue-helpers'
export {getPaths} from './src/scripts/_paths'
export {randomInt,getRandomNumber,getDigitCount,formatCurrency} from './src/scripts/_number'
export {mergeOptions} from './src/scripts/_object'
export {
    transformExplodeArray,
    replaceCharacters,
    trimCharacters,
    transformString,
    transformStringAll,
    validateString,
} from './src/scripts/transformString'

export {importantConsoleLog} from "./src/scripts/_console"
