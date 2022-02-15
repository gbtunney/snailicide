import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
import filters from 'windicss/plugin/filters'
import aspect_ratio from 'windicss/plugin/aspect-ratio'
import forms from 'windicss/plugin/forms'
import line_clamp from 'windicss/plugin/line-clamp'
import typography from 'windicss/plugin/typography'

import {IWindiConfig} from "./composable/useWindiCSS"
import getColorScaleMap from "./scripts/colorScale";

const active_plugins = [
    filters,
    aspect_ratio,
    forms,
    line_clamp,
    typography({
        modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    })
]

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

export const windiConfig: IWindiConfig = {
    attributify: true,
    safelist: 'p-1 p-2 p-3 p-4 bg-pink bg-red bg-corn-300',
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
                ...getColorScaleMap(colorScaleObj),
                gray: colors.coolGray,
                blue: colors.sky,
                red: colors.rose,
                pink: colors.fuchsia,
                "corn": {
                    "DEFAULT": "#efc618",
                    "50": "#fefcf3",
                    "100": "#fdf9e8",
                    "200": "#fbf1c5",
                    "300": "#f9e8a3",
                    "400": "#f4d75d",
                    "500": "#efc618",
                    "600": "#d7b216",
                    "700": "#b39512",
                    "800": "#8f770e",
                    "900": "#75610c"
                },
                "gumleaf": {
                    "DEFAULT": "#afd3c2",
                    "50": "#fbfdfc",
                    "100": "#f7fbf9",
                    "200": "#ebf4f0",
                    "300": "#dfede7",
                    "400": "#c7e0d4",
                    "500": "#afd3c2",
                    "600": "#9ebeaf",
                    "700": "#839e92",
                    "800": "#697f74",
                    "900": "#56675f"
                },
                "brandGrey": {
                    "dk": "#585858",
                    "dk-op80": "rgba(88,88,88,0.8)",
                    "DEFAULT": "#7f7f7f",
                    "lt": "#b0b0b0"
                },
                "white": {
                    "DEFAULT": "#FFFFFF",
                    "op80": "rgba(255,255,255,0.8)"
                },
                "grey": {
                    "DEFAULT": "#7f7f7f"
                },
                "black": {
                    "DEFAULT": "#000000"
                },
                "transparent": {
                    "DEFAULT": "transparent"
                }
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    shortcuts: {
        'btn': {
            'color': 'white',
            '@apply': 'py-2 px-4 font-semibold rounded-lg',
            '&:hover': {
                '@apply': 'bg-green-700',
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
        plugin(({addComponents}) => {
            const buttons = {
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                },
                '.btn-blue': {
                    'backgroundColor': '#3490dc',
                    'color': '#fff',
                    '&:hover': {
                        backgroundColor: '#2779bd',
                    },
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
        ...active_plugins,
    ],
}
export default windiConfig
