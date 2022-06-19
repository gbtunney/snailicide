import R from "ramda";
import RA from "ramda-adjunct";
import {trimCharacters, batchTrimCharacters} from "./_trimCharacters";
import {tg_isNotUndefined} from "./../../types/utilities";
import type {ExplodeArray} from "./type";

export const transformExplodeArray = function (
    {
        value,
        delimiter = ",",
        trim = undefined,
        prefix = undefined
    }: ExplodeArray): Array<string> {
    if (R.isEmpty(value)) return [];

    let explodedStringArr = value
        .toString()
        .split(delimiter)
    if (tg_isNotUndefined(trim) && RA.isArray(explodedStringArr) && RA.isNonEmptyArray(explodedStringArr)) {
        explodedStringArr = batchTrimCharacters(
            {
                ...trim,
                value: explodedStringArr, //merge with exploded arr.
            })
    }
    if (tg_isNotUndefined<string>(prefix) && RA.isArray(explodedStringArr) && RA.isNonEmptyArray(explodedStringArr)) {
        const cleaned_prefix =
            trimCharacters(
                {value: prefix, pattern: TRIM_CHARS_DEFAULT})
        explodedStringArr = explodedStringArr.map((_str) => `${cleaned_prefix}${_str}`)

    }
    if (RA.isArray(explodedStringArr) && RA.isNonEmptyArray(explodedStringArr)) {
        explodedStringArr = explodedStringArr.filter(function (_str) {
            return (_str.length > 2) ? true : false
        })
    }
    return explodedStringArr
};

const TRIM_CHARS_DEFAULT = [".", "'", '"', " ", "-", "[", "]", "(", ")"]; ///stuff to trim from css classes.
const DEFAULT_EXPLODE_REGEX = new RegExp(/[ ,]/g); /// default splitter by class
///this splits a string of windicss classes.
export const explodeCSSClassString = (
    {
        value,
        prefix = undefined,
        delimiter = DEFAULT_EXPLODE_REGEX,
        trim = {pattern: TRIM_CHARS_DEFAULT},
    }: ExplodeArray): string[] => transformExplodeArray({value, prefix, delimiter, trim})

export default transformExplodeArray;

/*.
OLD STUFFF. . ,
map(function (item) {
  return prefix ? `${prefix}${delimiter}${item}` : item;
}).filter(function (_item) {
  return (isInteger(_item)
      || RA.isInteger(_item)
      || (RA.isString(_item)
          && _item.length > 2));
}*/
