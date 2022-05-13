import colors from "windicss/colors";
import * as chroma from "chroma.ts";
import * as RA from "ramda-adjunct"
import {Chromable} from "chroma.ts";
import {tg_isCSSColorSpecial} from '@snailicide/g-library'


//TODO: Fix this busted typescript using tg_isPrimitive or something and reenabble strict mode
const colorDefaultKeys = (_colors) => {
    return Object.entries({..._colors}).reduce((accumulator, [key, value]) => {

            const new_actual_value: string | undefined =
                (tg_isCSSColorSpecial(value))
                    ? value
                    : undefined

            const new_default_color_value: string | undefined =
                (new_actual_value === undefined)
                    ? (RA.isString(value) && chroma.color(value))
                        ? chroma.color(value).hex()
                        : (value['DEFAULT'])
                            ? value['DEFAULT']
                            : (value["500"])
                                ? value["500"]
                                : undefined
                    : undefined
            if (new_actual_value !== undefined) return {...accumulator, [key]: new_actual_value}

            if (RA.isPlainObj(value) && new_default_color_value !== undefined) {
                return {...accumulator, ...{[key]: {...value, "DEFAULT": new_default_color_value}}}
            }
            return accumulator
        },
        {});
}
export const presetColorDefaults = {
    theme: {
        extend: {
            colors: colorDefaultKeys(colors)
        }
    },
}
export default presetColorDefaults
