import * as RA from "ramda-adjunct"
import chroma from "chroma-js";
import {transformString, validateString} from "@snailicide/g-library";

const css_blacklist = [" ", ";", "var(", ")"]
//todo: allowed values
const Color_Var_Prefix = ['--color-']

export const getColorCssUnit = function (value: string | boolean): string | boolean {
    if (RA.isNotString(value)) return false
    const cleanedColorString = transformString(value, css_blacklist)
    if (chroma.valid(cleanedColorString)) return chroma(cleanedColorString).hex()
    if (validateString(cleanedColorString, "--", "startsWith")) return `var(${cleanedColorString})`
    return cleanedColorString
}
export const colorThemeMixin = {
    props: {
        /**
         * Sets the background color
         * @values css variable, valid chroma.js color, boolean (on/off)
         */
        bg_color: {
            default: false,
            type: [Boolean, String],
        },
        /**
         * Sets the color
         * @values css variable, valid chroma.js color, boolean (on/off)
         */
        color: {
            default: false,
            type: [Boolean, String],
        },
    },
}
export default colorThemeMixin
