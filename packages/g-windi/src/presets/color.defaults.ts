import colors from "windicss/colors";
import * as chroma from "chroma.ts";
import * as RA from "ramda-adjunct"
import {Chromable} from "chroma.ts";

const colorDefaultKeys = Array.from(Object.entries({...colors})).reduce((accumulator, [key, value]) => {
        //console.log("COLORRRR",accumulator,key, ( value["500"] )? value['500'] : value)
        const new_color_value: Chromable | false = (RA.isString(value) && chroma.color(value))
            ? chroma.color(value).hex()
            : (value['DEFAULT'])
                ? value['DEFAULT']
                : (value["500"])
                    ? value["500"]
                    : false
        return {...accumulator, ...(new_color_value) ? {[key]: {"DEFAULT": new_color_value}} : {}}
    },
    {});
export default {
    theme: {
        colors: colorDefaultKeys,
        extend: {
            colors: colorDefaultKeys
        }
    },
}
