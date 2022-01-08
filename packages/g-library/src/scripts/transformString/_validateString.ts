import * as RA from "ramda-adjunct";
import {transformStringAll} from "./_transformString";
import {camelCase} from './../string'

export const STRING_VALIDATE_OPTIONS = ['startsWith', 'includes', 'endsWith','contains','eq']

/**
 * Validate String
 * @param {*} value - string to test
 * @param {array} [d=[]]] test_values - test string array
 * @param { startsWith | includes | endsWith | eq | contains} - operation
 * @example
 *      validateString("kitten", ["kit", "hi"], "startsWith"))
 *      => true
 */
///TODO:  validate an array of strings ? all? or pass in flag array???
export function validateString(value: boolean | string = false,
                               test_values: string | Array<string> = [],
                               operation = "eq",
                               case_sensitive = true, /// you can also use straigt transform object or array here
):boolean {
    const op =( operation).toString() //svsalidate enum????
    if (op !== "eq" && op !== "startsWith" && op !== "endsWith" && op !== "includes" && op !== "contains") {
        console.warn(`validateString operation: "${op}" is not permitted\nAllowed: eq, includes, startsWith, endsWith, contains",`)
    }

    const CLEAN_FLAGS = [...(case_sensitive === true) ? [] : ["case_sensitive"]]
    /*
        ( case_sensitive === false)
            ?
            :  ( RA.isPlainObj(case_sensitive))
                ? value
                : RA.ensureArray(case_sensitive)
*/
    const testString = transformStringAll(RA.ensureArray(value), [], CLEAN_FLAGS)
    const testStringArray = transformStringAll(RA.ensureArray(test_values), [], CLEAN_FLAGS)

    return RA.ensureArray(testStringArray).some(function (str) {
        if (op == "eq" && testString === str) return true
        const _op = (op ==="contains") ?  "includes" : op;
        if ((_op == "startsWith"
                || _op == "endsWith"
                || _op == "includes")
            && testString[_op](str)) return true
    })
}
