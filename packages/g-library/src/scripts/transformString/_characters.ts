import * as RA from "ramda-adjunct";
import * as R from "ramda";

/* * Function replaceCharacters * * * *
* @param { boolean | string | number } - single value
* @param { boolean | string | Array<string | boolean> } blacklist (list)-character blacklist
* @param {boolean} [d=true] replace_string - if true, default is "" empty string or string with new characters
* @return { boolean | string | number }- trimmed value */
export const replaceGCharacters = (pattern: string | RegExp, replacement = "", value: string): string => {
    return R.replace(pattern, replacement, value)
}

export const replaceAllCharacters = (pattern: string | RegExp | (string | RegExp)[],
                                     replacement = "",
                                     value: string): string => {
    return RA.ensureArray(pattern).reduce((accumulator: string, _pattern) =>
         replaceGCharacters(_pattern, replacement, accumulator), value) as string;
}

//example -   end of line. /gi$/g    start of line. /^gi/g
//R.replace(new RegExp( '^gi' ,'g' ) ,"","gillian"
export const trimCharacters = function (pattern = " ",
                                        value :string,
                                        trimStart = true,
                                        trimEnd = true):string {
    if (!trimStart && !trimEnd) return value
    return [
        ...(trimStart)
            ? [ ( pattern.length > 1 )
                ? R.replace(new RegExp(`^${pattern}`,'g'),"")
                : RA.trimCharsStart(pattern)
                ]
            : [],
        ...(trimEnd)
            ? [ ( pattern.length > 1 )
                ? R.replace(new RegExp(`${pattern}$`,'g'),"")
                : RA.trimCharsEnd(pattern)
            ]
            : [],
    ].reduce((accumulator: string, func) => {
        return R.pipe( func )(accumulator)
    }, value)
}
export const trimCharactersStart = (pattern = " ", value: string): string => {
    return trimCharacters(pattern, value, true, false)
}
export const trimCharactersEnd = (pattern = " ", value: string): string => {
    return trimCharacters(pattern, value, false, true)
}

export default replaceAllCharacters

