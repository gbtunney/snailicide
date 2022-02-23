import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
import {IWindiConfig} from "./composable/useWindiCSS"
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {Config, Theme, BaseTheme, Shortcut, DeepNestObject} from "windicss/types/interfaces";

/* * Import Presets * */
import presetOwool from "./presets/owool"
import presetColorDefaults from "./presets/color.defaults"
import presetColorScaleDemo, {colorScalePresetFactory} from "./presets/color.scale"
import preset3rdPartyPlugins from "./presets/active3party.plugins"

const active_presets = [
    presetColorDefaults,
    presetOwool,
    presetColorScaleDemo,
    preset3rdPartyPlugins
]
export const windiConfig: IWindiConfig = {
    attributify: true,
    //preflight: false,
    //exclude:[/^hover:/,/^text/,],
    //safelist: 'p-1 p-2 p-3 p-4 bg-pink bg-red hover:bg-corn-300',
    presets: active_presets,
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                ...colors
            },
        },
    },
    shortcuts: {
        'gillian': {
            '--color-theme': '#FF0000',
            'backgroundColor': 'var(--color-theme)',
            '@apply': 'py-2 px-4 font-semibold rounded-lg',
            '&:hover': {
                '@apply': 'bg-green-700',
                'color': 'black',
            },
        },
        'btn': {
            'color': 'bg-green-700',
            '@apply': 'py-2 px-4 font-semibold rounded-lg',
            '&:hover': {
                '@apply': 'bg-green-300',
                'color': 'black',
            },
        },
        'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    },
    plugins: [
        plugin(({addUtilities}) => {
            const newUtilities = {
                '.skew-10deg': {
                    transform: 'skewY(-10deg)',
                },
                '.skew-15deg': {
                    transform: 'skewY(-15deg)',
                },
            }
            addUtilities(newUtilities)
        }),
        plugin(({addBase, theme}) => {
            const obj: DeepNestObject = {
                h2: {fontsize: '42px'},
                "::root": {
                    '--color-theme': '#FF0000'
                }
            }
            addBase(obj/*{
                h1: { fontSize: theme('fontSize.2xl') },
                h2: { fontSize: theme('fontSize.xl') },
                h3: { fontSize: theme('fontSize.lg') },
            }*/)
        }),
        plugin(({addComponents, theme}) => {
            const buttons = {
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                },
                '.btn-red': {
                    'backgroundColor': '#e3342f',
                    'color': '#fff',
                    '&:hover': {
                        backgroundColor: '#cc1f1a',
                    },
                },
            }
            addComponents(buttons)
        }),
        plugin(({addDynamic, variants}) => {
            addDynamic('skew', ({Utility, Style}) => {
                return Utility.handler
                    .handleStatic(Style('skew'))
                    .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
                    .createProperty('transform')
            }, variants('skew'))
        }),
    ],
}
export default windiConfig
