const config_new = require("@snailicide/g-tailwind")
const {tw_config: config_object} = JSON.parse(JSON.stringify(config_new, null, 6))

const {getPluginConfig, gSVG,gTWExport} = require("@snailicide/g-tailwind")
const {variants, theme} = config_object

const boolPURGE = false

const PLUGIN_CONFIG = {
  'typography': {
    enabled: true,
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
    enabled: boolPURGE,
    content: ['./public/!**!/!*.html', './src/!**!/!*.{vue,js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: theme,
  variants: variants,
  plugins: getPluginConfig(PLUGIN_CONFIG)
}
