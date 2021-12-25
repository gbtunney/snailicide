/**
 * @mixin
 */
import {getCssPropertyUnit} from "./FunctionMixins";

//const Distance_Var_Prefix = ['--w-', '--h-']
//const Distance_Unit_Strings = [...Distance_Var_Prefix, 'var(', 'calc(', 'auto', 'initial']

export function getDistanceCssUnit(value: string | boolean | number, defaultvalue = 1): string | boolean {
   return getCssPropertyUnit(value,defaultvalue,"px" )
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
        /** Border Size
         * @values String (with unit), integer(px appended to end), boolean (on/off)
         */
        border_size: {
            default: false,
            type: [String, Number, Boolean],
        },
    },
}
export default dimensionsMixin
