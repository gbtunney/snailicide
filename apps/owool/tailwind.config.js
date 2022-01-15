const config_new = require("@snailicide/g-tailwind")
const {tw_config: config_object} = JSON.parse(JSON.stringify(config_new, null, 6))

const {getPluginConfig, gSVG,gTWExport} = require("@snailicide/g-tailwind")
const {variants, theme} = config_object

//console.log("GILLISNNN ", process.env.NODE_ENV,  process.env.VUE_APP_TITLE,boolPURGE)

const PLUGIN_CONFIG = {
  'typography': {
    enabled: false,
    source: require('@tailwindcss/typography'),
  },
  'forms': {
    enabled: true,
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
    source: gSVG
  },
  'tw-export': {
    source: gTWExport,
    enabled: false,
  },
  'rotate': false,
  'icons': false,
}
module.exports = {
  purge: {
    enabled:  (  process.env.NODE_ENV ==="production")? true:false,
    content: ['./public/!**!/!*.html', './src/!**!/!*.{vue,js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: theme,
  variants: {
    extend: {},
  },
  plugins: getPluginConfig(PLUGIN_CONFIG)
}
/*
module.exports = {
  /!*purge: ['./public/!**!/!*.html', './src/!**!/!*.{vue,js,ts,jsx,tsx}'],*!/
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}*/
