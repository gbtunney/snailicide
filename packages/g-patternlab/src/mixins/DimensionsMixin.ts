import * as RA from "ramda-adjunct"
import {transformString, validateString} from "@snailicide/g-library";

const Distance_Var_Prefix = ['--w-', '--h-']
const Distance_Unit_Strings = [...Distance_Var_Prefix, 'var(', 'calc(', 'auto', 'initial']
const css_blacklist = [" ", ";", "var(", ")"]

export function getDistanceCssUnit(value: string | boolean | number): string | boolean {
    if (RA.isNotString(value)) return false
    const cleanedDistanceString = transformString(value, css_blacklist)
    console.log("cleaneed distnce", cleanedDistanceString, typeof cleanedDistanceString)
    if (RA.isInteger(cleanedDistanceString)) return `${cleanedDistanceString}px`
    if (validateString(cleanedDistanceString, "--", "startsWith")) return `var(${cleanedDistanceString})`
    // if (validateString (cleanedDistanceString , Distance_Var_Prefix, "startsWith" ,true) ) return `var(${cleanedString})`
    return cleanedDistanceString//if its a proper string
}

export const dimensionsMixin = {
    props: {
        /** Width
         * @values String (with unit), integer(px appended to end), boolean (on/off)
         */
        width: {
            default: false,
            type: [String, Number, Boolean],
        },
        /** Height
         * @values String (with unit), integer(px appended to end), boolean (on/off)
         */
        height: {
            default: false,
            type: [String, Number, Boolean],
        },
    },
}
export default dimensionsMixin
