// hero-banner.js
const icon_settings_section = require('./gbt-icon-settings')
const base_settings = require('./base-section-wrapper-settings')

module.exports = {
    "name": "NEW UI Icon",
    "class":"vue",
    settings: [...icon_settings_section,...base_settings]
}
