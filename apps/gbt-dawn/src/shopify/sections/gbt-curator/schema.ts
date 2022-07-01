import {defineSectionSchema, Shopify} from '@snailicide/g-node-utils'

module.exports = () => {
    const base_settings = require('../partial/settings-wrapper')
    const _settings = require('./settings')

    return defineSectionSchema({
        "name": "Curator IO",
        "tag": "section",
        "settings": [
            ..._settings,
            ...base_settings
        ],
        "presets": [
            {
                "name": "gbt-curator-io",
                blocks: [],
            }
        ]
    })
}
