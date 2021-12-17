import * as R from "ramda"
import * as RA from "ramda-adjunct"
import chroma from "chroma-js";

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
    getColorCssUnit(value: string | boolean): string | boolean {
        return true
        /* if ( RA.isNotString(value))return false

        const cleanedColorString =  transformString( value, {trim:true, clean:css_blacklist })
        console.warn("colorClean!!!!!!!!!!!",value,"after" ,cleanedColorString )
        if ( chroma.valid(cleanedColorString) ) return chroma(cleanedColorString).hex()

        if (validateString (cleanedColorString , ['--color-'], "starts With" ,true) ) return `var(${cleanedColorString})`
        return cleanedColorString//if its a proper string???/
        ///validate if prefixed variable
          const validCssVariableWithVar = validateString (colorClean ,
                ['var('],
                " starts With" ,
                true,
                {trim:false})
            console.warn("validCssVariableWithVar!!!!!!!!!!!" ,validCssVariableWithVar )
            if (validCssVariableWithVar ) return*/

        ///validate if prefixed variable
    }

}
