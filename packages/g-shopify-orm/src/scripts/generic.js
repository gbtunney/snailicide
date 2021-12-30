import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {validateString}from "@snailicide/g-library"
export function setKeyMapImmutable(key, value, array = []) {
    return Array.from(new Map([...array]).set(key, value));
}

export function deleteKeyMapImmutable(key, array = []) {
    const _map = new Map([...array])
    if (_map.has(key)) _map.delete(key)
    return Array.from(_map)
}

export function getMapImmutable(array = [], key = false) {
    let _map = new Map(array);
    if (R.is(Boolean, key)) return _map;
    return _map.get(key) ? _map.get(key) : false
}
//this is an enum values
const CLONE_MODES = ["pick", "omit"]
const CLONE_MODES_OBJ = {pick: "pick", omit: "omit"}

/**
 cloneObject
 * @author=Gillian
 * @constructor
 * @param {object} value - Object with key/values
 * @param {boolean, string(enum) } - false: clone all props. ['pick','omit ]- calls ramda func to white/black list
 * @return {object} -
 */
export function cloneObject(value = {}, mode = false, id_list = [], mode_list = CLONE_MODES) {
    let returnvalue = {...value};

    if (mode && !R.isEmpty(value) && validateString(mode, mode_list, "eq")) {
        returnvalue = R.call(R[String(mode).toLowerCase()], id_list, value)
    }
    return returnvalue;
}
