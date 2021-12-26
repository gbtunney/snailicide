/**
 * This is the default tailwind config file used for
 * the creation of the doc/demo viewer.
 */
const config_new = require("@snailicide/g-tailwind")
const {tw_config: config_object} = JSON.parse(JSON.stringify(config_new, null, 6))

const {variants, theme} = config_object

const boolPURGE = false




module.exports = {
  theme: theme,
  variants: {
    borderColor: ['responsive', 'hover']
  },
  plugins: []
}
