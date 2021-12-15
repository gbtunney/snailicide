import * as RA from "ramda-adjunct";
import {stringContainsNumber} from "./_string";

export const toInteger = (value) => cleanIntegerType(value, false)

export const isInteger = (value) => (Number(value) == toInteger(value)) ? true : false

export function cleanIntegerType(value, removeNonDigits = false) {
    if (RA.isNotString(value) || !stringContainsNumber(value)) return value
    const castToNumber = parseInt((value).toString())
    return (removeNonDigits === true || (castToNumber).toString() === value) ? castToNumber : value
}

export const cleanBooleanType = (value) =>
    (RA.isNotString(value))
        ? value
        : (value === "true")
            ? true
            : (value === "false") ? false : value
