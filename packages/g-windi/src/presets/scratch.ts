import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
import {Config, Theme, BaseTheme, Shortcut, DeepNestObject} from "windicss/types/interfaces";
import useWindiCSS from "@/composable/useWindiCSS";
import {chromaColorBrighten} from "@/scripts/colorScale";

export default {
    theme: {
        extend: {
            // colors: colorDefaultKeys
        }
    },
    shortcuts: {
        // [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
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
        plugin(({addComponents, theme}) => {
            const buttons = {
                '.mynewbutton':{
                    'backgroundColor': '#e3342f',
                    'color': '#fff',
                    '&:hover': {
                        backgroundColor: '#cc1f1a',
                    },
                },
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
        plugin(({addDynamic, variants}) => {
            addDynamic('skew', ({Utility, Style}) => {
                return Utility.handler
                    .handleStatic(Style('skew'))
                    .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
                    .createProperty('transform')
            }, variants('skew'))
        }),
        plugin(({addDynamic, variants, theme}) => {
            console.log("THIS IS GILLIAN TEST !!!", theme('colors.red.500'))
            addDynamic('gtest', ({Utility, Style}) => {
                return Utility.handler
                    .handleColor(theme('textColor'))
                    /*  .handleColor("gumleaf": {
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
                  }, )*/
                    .handleOpacity(theme('textOpacity'))
                    .handleVariable()
                    .handleSquareBrackets()
                    .createColorStyle(Utility.class, 'backgroundColor', '--tw-text-opacity')
            }, variants('skew'))
        }),
        plugin(({addVariant, addUtilities}) => {
            addUtilities({
                'yarntest': {
                    backgroundColor: "#ff0000",
                }
            })
            addVariant('chroma', ({style, modifySelectors}) => {
              //  style.parent("testtttt")
                // style.add( "color","#FF0000")
                //style.
                return modifySelectors(({className}) => {
                    //  parent: (name: string) => Style;
                    const [newclassname] = className.split(":").reverse()
                    const {getDynamicKey,getDynamicValue} = useWindiCSS()
                    const masterReg = /\[([\s\S]+?)]/g
                   // chroma:bg-[#ff0000]
                  const   newvalue= (getDynamicKey(newclassname,masterReg) as string).replace(/\\/g, "");
                    // bg-
                    /*if ( className.startsWith("bg-");)
                     str.startsWith("He");
                     theme('colors.red.500')*/
                    console.log("chroma classname!", className,getDynamicKey(newclassname,masterReg),`bg-[${chromaColorBrighten(newvalue,.6).hex()}]`)
                    return `.bg-[${chromaColorBrighten(newvalue,5).hex()}]`
                })
               // return style
            })
        })
    ]
}
