import colors from 'windicss/colors'
import {IWindiConfig} from "./composable/useWindiCSS"

/* * Import Presets * */
import presetOwool from "./presets/owool"
import presetColorDefaults from "./presets/color.defaults"
import presetColorScaleDemo, {colorScalePresetFactory} from "./presets/color.scale"
import preset3rdPartyPlugins from "./presets/active3party.plugins"
import scratch from "./presets/scratch"

const active_presets = [
   // presetColorDefaults,
    presetOwool,
 //   presetColorScaleDemo,
    preset3rdPartyPlugins,
    scratch
]

export const windiConfig: IWindiConfig = {
    attributify: true,
    //preflight: false,
    //exclude:[/^hover:/,/^text/,],
    //safelist: 'p-1 p-2 p-3 p-4 bg-pink bg-red hover:bg-corn-300',
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
export default windiConfig
