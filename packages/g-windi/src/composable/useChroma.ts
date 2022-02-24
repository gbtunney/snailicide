import * as R from "ramda"
import * as RA from "ramda-adjunct"
import * as chroma from "chroma.ts";
import {Chromable, Color} from "chroma.ts";

export const useChroma = () => {
    const rotateHueFunction = (hue: number, incrementValue: number): number => {
        //todo chheck to see if inc is an integer.
        return (hue + incrementValue) % 360
    }
    //RA.rangeStep(5, 0, 20); // => [0, 5, 10, 15]
    const complement = (color: Chromable, format?: chroma.ColorFormat) => {
        const [hue, ...rest] = chroma.color(color).hsl()
        return chroma.color([rotateHueFunction(hue, 180), ...rest], format)
    }
    const triad = (color: Chromable, format?: chroma.ColorFormat) => {
        const [hue, ...rest] = chroma.color(color).hsl()
        return [hue, rotateHueFunction(hue, 120), rotateHueFunction(hue, 240)]
            .map((hue_step) => chroma.color([hue_step, ...rest], format))
    }
    const tetrad = (color: Chromable, format?: chroma.ColorFormat) => {
        const [hue, ...rest] = chroma.color(color).hsl()
        return [hue,
            rotateHueFunction(hue, 90),
            rotateHueFunction(hue, 180),
            rotateHueFunction(hue, 270)
        ].map((hue_step) => chroma.color([hue_step, ...rest], format))
    }
    const split_complement = (color: Chromable, format?: chroma.ColorFormat) => {
        const [hue, ...rest] = chroma.color(color).hsl()
        return [hue,
            rotateHueFunction(hue, 72),
            rotateHueFunction(hue, 216)
        ].map((hue_step) => chroma.color([hue_step, ...rest], format))
    }
    const analogous = (color: Chromable, results = 6, slices = 30, format?: chroma.ColorFormat) => {
        const [hue, ...rest] = chroma.color(color).hsl()
        return [hue,
            rotateHueFunction(hue, 72),
            rotateHueFunction(hue, 216)
        ].map((hue_step) => chroma.color([hue_step, ...rest], format))
    }

    function _analogous(color, results, slices) {
        /*results = results || 6;
        slices = slices || 30;

        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];

        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;*/
    }

    function monochromatic(color: Chromable, results = 6, format?: chroma.ColorFormat) {
        // const [h,s,v] = chroma.color(color).hsv()
        const modification = 1 / results;
        const explodeColorByResultsArr = R.repeat(chroma.color(color).hsv(), results)
        /*const newexplodeColorByResultsArr = explodeColorByResultsArr.map( (value,index)=>{
            const [h,s,v] =value
            const newv = (v + modification) % 1;
            v = (v + modification) % 1;
        } )*/
        //reduce function idk???
    }
    function _monochromatic(color, results) {
        /* results = results || 6;
         var hsv = tinycolor(color).toHsv();
         var h = hsv.h, s = hsv.s, v = hsv.v;
         var ret = [];
         var modification = 1 / results;
         while (results--) {
             ret.push(tinycolor({ h: h, s: s, v: v}));
             v = (v + modification) % 1;
         }*/
    }
    return {
        chroma,
        rotateHueFunction,
        complement,
        triad,
        tetrad,
        split_complement,
        analogous,
        monochromatic
    }
}
export default useChroma
