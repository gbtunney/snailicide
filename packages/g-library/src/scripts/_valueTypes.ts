import * as RA from "ramda-adjunct";
import {stringContainsNumber} from "./string";

type singleValue = string | boolean | number

export const toInteger = (value: singleValue): singleValue =>
    cleanIntegerType(value, false)

export const isInteger = (value: singleValue): boolean =>
    (RA.isValidNumber(toInteger(value)))

/**
 * cleanIntegerType - parses string to integer by removing nondigits ( removeNonDigits ) or parsing only
 * @param {*} value - value
 * @param {boolean} [d=false] removeNonDigits - removeNonDigits flag
 * @example
 *      cleanIntegerType('2px', true)
 *      => 2.0
 */
export function cleanIntegerType(value: singleValue = false,
                                 removeNonDigits = false): singleValue {
    if (RA.isBoolean(value) || RA.isNotString(value) || !stringContainsNumber((value).toString())) return value
    const castToNumber: number = parseInt((value).toString())
    return (removeNonDigits === true || (castToNumber).toString() === value) ? castToNumber : value
}

export const cleanBooleanType = (value: string | boolean): string | boolean =>
    (RA.isNotString(value))
        ? value
        : (value === "true")
            ? true
            : (value === "false") ? false : value
