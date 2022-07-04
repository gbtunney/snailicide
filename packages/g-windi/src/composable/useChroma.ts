import * as chroma from "chroma.ts";
import {ChromaColor} from "./../types";

import {tg_isCSSColorSpecial, tg_isNotUndefined, tg_isUndefined} from "@snailicide/g-library";

export type useChroma = typeof useChroma
export const useChroma = () => {
    const chromaColorBrighten = (value: string | undefined, amount: number): ChromaColor | undefined => {
        if (tg_isUndefined(value) || tg_isCSSColorSpecial(value)) return undefined
        if (tg_isNotUndefined<string>(value)) {
            if (chroma.color(value)) {
                //TODO:make typegaurd for chroma
                return chroma.color(value).darker(3);
            }
        }
        return undefined
    }

    return {chromaColorBrighten}
}
export default useChroma
