import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () => {
    const base_settings = require('../partial/settings-wrapper')
    const icon_settings = require('./settings')

    return defineSectionSchema({
        "name": "Gillian UI Icon",
        "settings": [...icon_settings, ...base_settings],
        "presets": [
            {
                "name": "gbt-icon",
                blocks: [],
            }
        ]
    })
}
