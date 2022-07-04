import colors from "windicss/colors";
import * as chroma from "chroma.ts";
import {tg_isCSSColorSpecial, tg_isNotUndefined, tg_isString} from '@snailicide/g-library'

type Colors = {
    [key: string]: string | {
        [K in (string)]: string
    }
};
const colorDefaultKeys = (_colors: Colors) => {
    return Object.entries(_colors).reduce((accumulator, [key, value]) => {

            let my_new_value: string | undefined = undefined
            if (tg_isString(value)) {
                if (tg_isCSSColorSpecial(value)) my_new_value = value;
                else if (chroma.color(value)) my_new_value = chroma.color(value).hex()
                else return accumulator
                return {...accumulator, [key]: my_new_value}
            } else {
                if (tg_isNotUndefined<string>(value['DEFAULT'])) my_new_value = value['DEFAULT']
                else if (tg_isNotUndefined<string>(value['500'])) my_new_value = value['500']
                else return accumulator
                return {...accumulator, ...{[key]: {...value, "DEFAULT": my_new_value}}}
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
