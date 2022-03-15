const path = require('path')
const tw_config = require(path.join(__dirname, 'tailwind.config.js'))
const {getPluginConfig,PLUGIN_CONFIG} = require(path.join(__dirname, 'tailwind.config.js'))
const gSVG = require(path.join(__dirname, 'src/plugins/gSVG.js'))
const gTWExport = require(path.join(__dirname, 'src/plugins/gTW-Export.js'))
module.exports = {tw_config, getPluginConfig, gSVG,gTWExport,PLUGIN_CONFIG}
