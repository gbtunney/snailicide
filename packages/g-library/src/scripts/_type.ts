import * as RA from "ramda-adjunct";
import {stringContainsNumber} from "./string";

export const toInteger = (value): any => cleanIntegerType(value, false)

export const isInteger = (value: any):boolean => (RA.isValidNumber(toInteger(value)))

/**
* cleanIntegerType - parses string to integer by removing nondigits ( removeNonDigits ) or parsing only
* @param {*} value - value
* @param {boolean} [d=false] removeNonDigits - removeNonDigits flag
* @example
 *      cleanIntegerType('2px', true)
 *      => 2.0
*/
export function cleanIntegerType(value = false , removeNonDigits = false):any {
    if (RA.isNotString(value) || !stringContainsNumber(value)) return value
    const castToNumber :number= parseInt((value).toString())
    // @ts-expect-error
    return (removeNonDigits === true || (castToNumber).toString() === value) ? castToNumber : value
}

export const cleanBooleanType = (value) =>
    (RA.isNotString(value))
        ? value
        : (value === "true")
            ? true
            : (value === "false") ? false : value


const generic_test_values = [
    'gillian',
    {testobj: "testing!!!!"},
    [],
    ["true"],
    true,
    2,
    0
]



