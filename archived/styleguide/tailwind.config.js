const config_new = require("@snailicide/g-tailwind")
const {tw_config: config_object} = JSON.parse(JSON.stringify(config_new, null, 6))
const {getPluginConfig, gSVG} = require("@snailicide/g-tailwind")
const {variants, theme} = config_object
const boolPURGE = false
///note: this is literally the same config as the patternlab. maybe reroute? no idea.
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
  /*'tw-export': {
    source: gTWExport,
    enabled: false,
  },*/
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
  variants: [],
  plugins: getPluginConfig(PLUGIN_CONFIG)
}
/*const obj = {
    purge: {
        // learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      //  enabled: false,/!*process.env.NODE_ENV === 'production',*!/

        /!* content: [
           path.resolve(__dirname, '**!/!*.{js,vue}'),
           path.resolve(__dirname, '../shopify/!**!/!*.liquid')
         ]*!/
    },
    /!*todo: reenabble
      purge: ['./public/!**!/!*.html', './src/!**!/!*.{vue,js,ts,jsx,tsx}'],
    *!/
    darkMode: false, // or 'media' or 'class'
}*/
