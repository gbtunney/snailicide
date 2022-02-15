import * as chroma from "chroma.ts";
import * as RA from "ramda-adjunct"
import {Chromable, Color} from "chroma.ts";

///**** PROJECT CUSTOM (BASE) COLORS **** uses numbers for shades. ***///
const colorScaleObj = {
    "newgumleaf": {
        default_color: "afd3c2"
    },
    "gradient": {
        scale: ['yellow', 'red', 'black'],
        default_color: 'red',
        color_count: 9
    },
    "potter-winkle": {
        default_color: 'CCCCFF'
    }
}

interface IColorScaleConfig {
    scale: [] | Chromable[];
    default_color?: Chromable; //default color
    color_count: number;
}

const getColorScaleMapInner = ({scale = [], default_color, color_count = 5}: IColorScaleConfig = {
    scale: [],
    color_count: 5
}) => {
    if (RA.isUndefined(default_color) && RA.isEmptyArray(scale)) return
    if (RA.isUndefined(default_color) && scale.length > 0) [default_color] = scale
    //if scale array is empty, map gradient.

    scale  = (default_color && scale.length <= 1)
        ? [chroma.color(default_color).luminance(0), chroma.color(default_color).luminance(0.5), chroma.color(default_color).luminance(1)]
        : scale
    const map_scale: Array<string> = chroma.scale(scale).correctLightness().colors(color_count)
    return Object.entries(map_scale).reduce(
        (scale_map_accumulator,
         [key, value]) => {
            return {...scale_map_accumulator, ...{[`${(parseInt(key) + 1)}00`]: chroma.color(value).hex()}}

        }, {["DEFAULT"]: chroma.color(default_color as Chromable).hex()});
}
export const getColorScaleMap = (colorScaleConfig: Record<string, IColorScaleConfig | Pick<IColorScaleConfig, "default_color">>) => {
    return Object.entries(colorScaleConfig).reduce((accumulator, [key, value], currentIndex, array) => {
        return {...accumulator,    [ key] : getColorScaleMapInner({
                    scale: [],
                    color_count: 5,
                    ...value
                }
            )}
   }, {});
}

export default getColorScaleMap;
