import {Map, List} from 'immutable';
import colors from "windicss/colors";

const color_obj = {
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
        "DEFAULT": "#7f7f7f",
        "lt": "#b0b0b0"
    },
    "grey": {
        "DEFAULT": "#7f7f7f"
    }
}
const colorMap = Map(color_obj)
const CUSTOM_THEME_COLORS = {
    /** PRIMARY ACCENT ----  BRAND MINT GREEN COLOR w defaults */
    "accent-primary": {
        "lt": colorMap.getIn(['gumleaf', '300']),
        "DEFAULT": colorMap.getIn(['gumleaf', 'DEFAULT']),
        "dk": colorMap.getIn(['gumleaf', '600']),
    },
    "accent-secondary": {
        "lt": colorMap.getIn(['corn', '300']),
        "DEFAULT": colorMap.getIn(['corn', '500']),
        "dk": colorMap.getIn(['corn', '700']),
    },
    "dark": {
        "lt": colorMap.getIn(['brandGrey', 'lt']),
        "DEFAULT": colorMap.getIn(['brandGrey', 'dk']),
        "dk": colorMap.getIn(['brandGrey', 'dk']),
    },
    "light": {   ///TODO : UPDATE someday with maybe a tint or something??????
        "lt": colors.white,
        "DEFAULT": colors.white,
        "dk": colors.white,
    },
    "primary": {
        "lt": colorMap.getIn(['brandGrey', 'lt']),
        "DEFAULT": colorMap.getIn(['brandGrey', 'DEFAULT']),
        "dk": colorMap.getIn(['brandGrey', 'dk']),
    }
}

///**** PROJECT CUSTOM SYSTEM FONTS *******///
const DEFAULT_FONTS = {
    sans: ['Optima', 'sans-serif'],
    serif: ['Garamond', 'Georgia', 'serif'],
};
const defaultFontMap: Map<string, string[]> = Map(DEFAULT_FONTS)

///**** PROJECT CUSTOM (BASE) FONTS *******///
const CUSTOM_BASE_FONTS = {
    'garamond': ["adobe-garamond-pro", ...defaultFontMap.get("serif")],
    'cormorant': ["cormorantgaramond", ...defaultFontMap.get("serif")],

    /** Accent/ Sans  Font Candidates */
    /** CRONOS */
    'cronos': ["cronos-pro-display", ...defaultFontMap.get("sans")],

    /** CORSO */
    'corso-medium': ['Corso Medium', ...defaultFontMap.get("sans")], //mergeSystemFont('Corso Medium', DEFAULT_FONTS.sans),
    'corso-regular': ['Corso Regular', ...defaultFontMap.get("sans")],

    /** MONTTSERRAT */
    'mont': ['montserrat', ...defaultFontMap.get("sans")],
}

const fontMap: Map<string, string[]> = Map(CUSTOM_BASE_FONTS)
const CUSTOM_THEME_FONTS = {
    'primary': fontMap.get("garamond"),
    'secondary': fontMap.get("cronos"),//CUSTOM_BASE_FONTS.cronos,
    'accent': fontMap.get("cormorant"),
};
//todo: turn this into a factory thing.

export default {
    theme: {
        colors: {
            ...color_obj,
            ...CUSTOM_THEME_COLORS
        },
        fontFamily: {...DEFAULT_FONTS, ...CUSTOM_BASE_FONTS},
        /** EXTEND THEME */
        extend: {
            fontFamily: CUSTOM_THEME_FONTS,
        },
    },
}
