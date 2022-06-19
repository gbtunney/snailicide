import RA from "ramda-adjunct";
import R from "ramda";
import type {ReplaceCharacters, ReplaceSinglePatternCharacters, TransformBatch} from "./type";

const replaceCharactersSinglePattern = ({
                                            value,
                                            pattern = " ",
                                            replacement = ""
                                        }: ReplaceSinglePatternCharacters): string =>
    R.replace(pattern, replacement, value)

/* * Function replaceAllCharacters * * * *
* @param { string } - single value
* @param { string | RegExp | (string | RegExp)[] }  [d=" "] pattern - (blacklist)
* @param {string} [d=""] replacement -empty string or string with new characters
* @return { string } - trimmed value */
export const replaceAllCharacters = ({value, pattern = " ", replacement = ""}: ReplaceCharacters): string => {
    return RA.ensureArray(pattern).reduce((accumulator: string, _pattern) =>
        replaceCharactersSinglePattern(
            {
                pattern: _pattern,
                value: accumulator,
                replacement
            }), value);
}

/* * Function batchReplaceAll * * * * TODO: NEEDS UPDATE!!!
* @param { string | string[] } - array of strings to be replaced.
* @param { string | RegExp | (string | RegExp)[] }  [d=" "] - pattern (blacklist )
* @param {string} [d=""] replacement -empty string or string with new characters
* @return { string } - array of trimmed strings.  */
export const batchReplaceAll = ({
                                    value,
                                    pattern = " ",
                                    replacement = ""
                                }: TransformBatch<ReplaceCharacters>): string[] => {
    const _value =
        (RA.isString(value))
            ? RA.ensureArray(value) :
            value //already an array

    return _value.map((single_value) => {
        return replaceAllCharacters({value: single_value, pattern, replacement})
    })
}
export default replaceAllCharacters
