import {defineConfig} from 'windicss/helpers'
import colors from 'windicss/colors'

/* * Import Presets * */
import presetOwool from "./build/windicss/presets/owool"
import  {colorScalePresetFactory,presetColorDefaults,preset3rdPartyPlugins} from "@snailicide/g-windi"
import * as process from "process";

console.log("wiehiwuehuwihr",process.env.VUE_APP_TYPEKIT_ID)
export type IWindiConfig = ReturnType<typeof defineConfig>

const active_presets = [
    //presetColorDefaults,
    presetOwool,
  //  preset3rdPartyPlugins,
]
export const windiConfig: IWindiConfig = {
    attributify: true,
    extract: {
        // accepts globs and file paths relative to project root
        include: [
            '**/**/*.{vue,html,jsx,liquid,ts}',
        ],
        exclude: [
            'node_modules/**/*',
            '.git/**/*',
        ],
    },
    //preflight: false,
    //exclude:[/^hover:/,/^text/,],
    safelist: 'p-1 p-2 p-3 p-4 font-sans font-serif',
    presets: active_presets,
    rules: [],
    theme: {
        gillian: {
            textColor: 'white',
            backgroundColor: 'red',
            borderColor: 'rebeccapurple'
        },
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                ...colors,
            },
        },
    },
}
export default defineConfig(windiConfig)
