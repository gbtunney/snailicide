import {defineConfig} from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

/* * Import Presets * */
import presetOwool from "./build/windicss/presets/owool"
import plugin from "windicss/plugin";
import  {presetColorDefaults} from "@snailicide/g-windi"
//colorScalePresetFactory preset3rdPartyPlugins
//console.log("wiehiwuehuwihr",process.env.VUE_APP_TYPEKIT_ID,JSON.stringify(presetColorDefaults, null, 4))
export type IWindiConfig = ReturnType<typeof defineConfig>

const active_presets = [
    presetColorDefaults,
    presetOwool,
  // preset3rdPartyPlugins,
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
    safelist: 'radius-circle p-1 p-2 p-3 p-4 font-sans prose font-serif flex inline-flex flex-row flex-column justify-center items-center',
    presets: active_presets,
    rules: [],
    shortcuts: {
        'sm-caps': 'tracking-wide uppercase',
    },
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
    plugins: [
        typography,
        plugin(({addComponents, theme}) => {
            const buttons = {
                '.radius-circle':{
                    'border-radius': '100%'
                },
                '.flex-center': {
                    'justify-content': 'center',
                    'align-items': 'center'
                },
                '.reflect-x': {
                    'transform': 'scale(-1, 1)'
                },
                '.reflect-y': {
                    'transform': 'scale(1, -1)'
                },
                '.g-svg-fill svg': {
                    '& path, & g, & rect, & circle': {
                        "fill": 'currentColor'
                    },
                },
                '.g-svg svg': {
                    'display': 'block',
                    'width': '100%',
                    'height': '100%',
                },
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                },
                '.btn-red': {
                    'backgroundColor': 'orange',
                    'color': '#fff',

                },
            }
            addComponents(buttons)
        }),
    ]
}
export default defineConfig(windiConfig)
