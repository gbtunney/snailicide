//todo: upgrade postcss + tailwind?????
const path = require('path')
const colors = require('tailwindcss/colors')
//const getPluginConfig=require(path.join(__dirname, '/src/tailwind/twGetPluginConfig.js'))

//const custom_colors=require(path.join(__dirname, '/src/config/tw-colors.json'))

const mergeSystemFont = function (_family, _system_family = DEFAULT_FONTS.serif) {
    return [_family, ..._system_family]
};
// plugin config function

const getPluginConfig = function (_config = PLUGIN_CONFIG) {
    let arr = [];
    for (const [_key, _plugin_config] of Object.entries(_config)) {
        if (_config[_key]['enabled'] && _config[_key]['source']) {
            arr.push(_config[_key]['source']);
        }
    }
    //console.log(`There are ${key} ${_plugin_config}s`)
    if (arr.length >= 0) return arr;
    return;
}


///**** CURRATED DEFAULT COLORS ****(***///
const DEFAULT_TW_COLORS = {
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.trueGray,
    indigo: colors.indigo,
    red: colors.rose,
    yellow: colors.amber,
}

///**** PROJECT CUSTOM (BASE) COLORS **** uses numbers for shades. ***///
const CUSTOM_BASE_COLORS = require(path.join(__dirname, '/src/config/tw-colors.json'))


///**** PROJECT CUSTOM SYSTEM FONTS *******///
const DEFAULT_FONTS = {
    sans: ['Optima', 'sans-serif'],
    serif: ['Garamond', 'Georgia', 'serif'],
};

///**** PROJECT CUSTOM (BASE) FONTS *******///
const CUSTOM_BASE_FONTS = {
    'garamond': mergeSystemFont('adobe-garamond-pro', DEFAULT_FONTS.serif),
    'cormorant': mergeSystemFont('cormorantgaramond', DEFAULT_FONTS.serif),

    /** Accent/ Sans  Font Candidates */
    /** CRONOS */
    'cronos': mergeSystemFont('cronos-pro-display', DEFAULT_FONTS.sans),

    /** CORSO */
    'corso-medium': mergeSystemFont('Corso Medium', DEFAULT_FONTS.sans),
    'corso-regular': mergeSystemFont('Corso Regular', DEFAULT_FONTS.sans),

    /** MONTTSERRAT */
    'mont': mergeSystemFont('montserrat', DEFAULT_FONTS.sans),//todo: figure out where thihs is being loaded?
}

///**** PROJECT CUSTOM (BRAND) FONTS **** use base values to reference ***///
const CUSTOM_THEME_FONTS = {
    'primary': CUSTOM_BASE_FONTS.garamond,
    'secondary': CUSTOM_BASE_FONTS.cronos,
    'accent': CUSTOM_BASE_FONTS.cormorant,
};


const PLUGIN_CONFIG = {
    'typography': {
        enabled: false,
        source: require('@tailwindcss/typography'),
    },
    'forms': {
        enabled: false,
        source: require('@tailwindcss/forms'),
    },
    'css-variables': {
        enabled: true,
        source: require('tailwind-css-variables')(
            {}, {postcssEachVariables: true}
        )
    },
    'gsvg': {
        enabled: true,
        source: require(path.join(__dirname, '/src/plugins/gSVG.js'))
    },
    'tw-export': {
        enabled: false,
        source: require(path.join(__dirname, '/src/plugins/gTW-Export.js'))
    },
    'rotate': false,
    'icons': false,
}
//onsole.log(Object.assign(custom_colors))
const TAILWIND_THEME_CONFIG = {
    /** THEME */
    colors: {...CUSTOM_BASE_COLORS, ...DEFAULT_TW_COLORS}, //curated list of tailwind colors
    fontFamily: {...DEFAULT_FONTS, ...CUSTOM_BASE_FONTS},

    /** EXTEND THEME */
    extend: {
        /*   colors: CUSTOM_THEME_COLORS,*/
        fontFamily: CUSTOM_THEME_FONTS,
    },

    /** THEME EXTRAS - (not extended)  */
    container: {
        center: true,
        padding: '1rem'
    },
    rotate: {
        '45': '45deg',
        '90': '90deg',
        '180': '180deg',
        '270': '270deg',
    },
};

module.exports = {
    /*
      purge: ['./public/!**!/!*.html', './src/!**!/!*.{vue,js,ts,jsx,tsx}'],
    */
    darkMode: false, // or 'media' or 'class'
    theme: TAILWIND_THEME_CONFIG,
    variants: {
        extend: {},
    },
    plugins: getPluginConfig(PLUGIN_CONFIG),
    /*
     [
/!*
     require('@tailwindcss/typography'),
*!/
     require('@tailwindcss/forms'),

 ] //getPluginConfig(PLUGIN_CONFIG),*/
}
