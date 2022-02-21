import {toInteger} from "./_valueTypes";
import * as RA from "ramda-adjunct";

export function randomInt(min = 0, max  = 100):number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomNumber(_multiplier= 100) :number{
    //TODO: make actuall functionx
    return Math.floor(Math.random() * _multiplier)
}

export function getDigitCount(value:number) {
    return Math.log(toInteger(value)) * Math.LOG10E + 1 | 0;
}

export const formatCurrency = function (
    value: number | string | boolean,
    minimumFractionDigits = 2,
    currency = "USD"
):string|boolean {
    if (RA.isString(value)) {
        value = RA.isValidNumber(Number(value)) ? Number(value) : false;
    }
    if (RA.isBoolean(value) || typeof value !== "number") {
        return value;
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits,
    }).format(value);
};
