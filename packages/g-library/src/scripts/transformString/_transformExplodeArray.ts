import * as R from "ramda";
import * as RA from "ramda-adjunct";
import { transformStringAll, transformString } from "./_transformString";
import {isInteger} from "./../_valueTypes"

const TRIM_CHARS_DEFAULT = [".", "'", '"', " ", "-", "[", "]", "(", ")"];

const DEFAULT_EXPLODE_REGEX = new RegExp(/[ ,]+/); ///spliter
//keep/  NO PREFIX NEED TO RENMAE   //value: string | boolean |Array<string|boolean>
export const transformExplodeArray = function (
  value: string | boolean | Array<string | boolean> = false,
  prefix: boolean | string = false,
  delimiter = ":"
): Array<string | boolean> {
  if (RA.isBoolean(value) || R.isEmpty(value)) return [];

  const cleanedPrefix =
    prefix !== false
      ? transformString(prefix, TRIM_CHARS_DEFAULT, ["trim"])
      : false;
  prefix = cleanedPrefix;
  const explodedStringArr = value
    .toString()
    .split(DEFAULT_EXPLODE_REGEX)
  value = RA.ensureArray(explodedStringArr);
  return RA.ensureArray(
    transformStringAll(value, TRIM_CHARS_DEFAULT, ["trim"])
  ).map(function (item) {
    return prefix ? `${prefix}${delimiter}${item}` : item;
  }).filter(function (_item) {
    return (isInteger(_item)
        || RA.isInteger(_item)
        || (RA.isString(_item)
            && _item.length > 2));
  });
};

export default transformExplodeArray;
