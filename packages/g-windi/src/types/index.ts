import type {Config, DefaultTheme} from "windicss/types/interfaces";
import {Chromable as TChromable} from "chroma.ts";
export {Chromable,Color as ChromaColor} from "chroma.ts";
export type WindiConfig = Config
export type WindiDefaultTheme = DefaultTheme
export type ThemeColors = WindiDefaultTheme["colors"]

export type ColorScaleConfig = {
    scale: [] | TChromable[];
    default_color?: TChromable; //default color
    color_count: number;
}
export type ColorScaleConfigCollection =
    Record<string, ColorScaleConfig | Pick<ColorScaleConfig, "default_color">>

export type {useChroma} from "./../composable/useChroma";
export type {useWindiCSS} from "./../composable/useWindiCSS";
export type {useColorScale} from "./../composable/useColorScale";
export type {useConfigDefaults} from "./../composable/useConfigDefaults";
