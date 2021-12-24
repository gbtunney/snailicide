/**
 * @mixin
 */
import * as RA from "ramda-adjunct"
import chroma from "chroma-js";
import {getCssPropertyUnit} from "@/mixins/FunctionMixins";

const css_blacklist = [" ", ";", "var(", ")"]
//todo: allowed values
const Color_Var_Prefix = ['--color-']

export function getColorCssUnit(value: string | boolean ): string | boolean {
    const cleanedColorString = getCssPropertyUnit(value)
    return ( RA.isString(value)  && chroma.valid(cleanedColorString) ) ? chroma(cleanedColorString).hex() : cleanedColorString
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
        /**
         * Sets the border color using foreground color if true
         * @values  foreground- color prop, css variable, valid chroma.js color, boolean (on/off)
         */
        border:{
            default:false,
            type: [Boolean, String],
        },
    },
}
export default colorThemeMixin
