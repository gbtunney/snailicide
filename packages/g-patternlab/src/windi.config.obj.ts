import colors from 'windicss/colors'
import plugin from "windicss/plugin";


export const windiConfig = {
    attributify: true,
    //preflight: false,
    //exclude:[/^hover:/,/^text/,],
    //safelist: 'p-1 p-2 p-3 p-4 bg-pink bg-red hover:bg-corn-300',
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
    plugins: [
        plugin(({addComponents, theme}) => {
            const buttons = {
                '.g-svg svg':{
                    'display': 'block',
                    'width' : '100%',
                    'height': '100%',
                    '& path, & g, & rect, & circle' : {
                       "fill" :'currentColor'
                    },
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
export default windiConfig
