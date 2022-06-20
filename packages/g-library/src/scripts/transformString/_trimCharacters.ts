import * as RA from "ramda-adjunct";
import * as R from "ramda";
import type {TrimCharacters, TrimSinglePatternCharacters, TransformBatch} from "./type";
import {tg_isNonEmptyArray} from "./../../types/utilities";
import {escapeRegExp} from './../string/index'

const trimCharactersforSinglePattern = function ({
                                                            value,
                                                            pattern = ' ',
                                                            trimStart = true,
                                                            trimEnd = true
                                                        }: TrimSinglePatternCharacters): string {
    if (!trimStart && !trimEnd) return value
    if (RA.isString(pattern)) {
        return [
            ...(trimStart)
                ? [(pattern.length > 1)
                    ? R.replace(getRegMatchStartOfString(pattern), "")
                    : RA.trimCharsStart(pattern)
                ]
                : [],
            ...(trimEnd)
                ? [(pattern.length > 1)
                    ? R.replace(getRegMatchEndOfString(pattern), "")
                    : RA.trimCharsEnd(pattern)
                ]
                : [],
        ].reduce((accumulator: string, func) => {
            return R.pipe(func)(accumulator)
        }, value)
    } else if (RA.isRegExp(pattern)) return R.replace(pattern, "")(value)
    else return value
}

//example -   end of line. /gi$/g    start of line. /^gi/g
//R.replace(new RegExp( '^gi' ,'g' ) ,"","gillian"
export const trimCharacters = ({value, pattern = " ", trimStart = true, trimEnd = true}: TrimCharacters): string => {
    if (!trimStart && !trimEnd) return value
    return RA.ensureArray(pattern).reduce((accumulator: string, pattern_single: RegExp | string) => {
        return trimCharactersforSinglePattern(
            {
                value: accumulator,
                pattern: pattern_single,
                trimStart,
                trimEnd
            })
    }, value);
}

export const batchTrimCharacters = ({
                                        value,
                                        pattern = " ",
                                        trimStart = true,
                                        trimEnd = true
                                    }: TransformBatch<TrimCharacters>): string | string[] => {
    const _value =
        (RA.isString(value))
            ? RA.ensureArray(value) :
            value //already an array

    const result = _value.map((single_value) => {
        return trimCharacters({value: single_value, pattern, trimStart, trimEnd})
    })
    return ((RA.isString(value)) && tg_isNonEmptyArray<string>(result)) ? (result[0] as string) : result as string[]
}

export const trimCharactersStart = ({value, pattern = " "}: TrimCharacters): string => {
    return trimCharacters(
        {
            value,
            pattern,
            trimStart: true,
            trimEnd: false
        }
    )
}
export const trimCharactersEnd = ({value, pattern = " "}: TrimCharacters): string => {
    return trimCharacters(
        {
            value,
            pattern,
            trimStart: false,
            trimEnd: true
        }
    )
}

export const getRegMatchStartOfString = (pattern: string, flags = 'g') => new RegExp(`^${pattern}`, flags)
export const getRegMatchEndOfString = (pattern: string, flags = 'g') => new RegExp(`${escapeRegExp(pattern)}$`, flags)
