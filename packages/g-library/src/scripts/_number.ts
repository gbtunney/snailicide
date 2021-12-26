import {toInteger} from "@/scripts/_type";

export function randomInt(min = 0, max = 100):number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomNumber(_multiplier = 100) :number{
    //TODO: make actuall functionx
    return Math.floor(Math.random() * _multiplier)
}

export function getDigitCount(value) {
    return Math.log(toInteger(value)) * Math.LOG10E + 1 | 0;
}
