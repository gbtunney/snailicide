import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () => {
    const base_settings = require('./../partial/settings-wrapper')
    const icon_settings = require('./../gbt-icon/settings')

    return defineSectionSchema({
        "name": "UI Divider",
        "settings": [
            {
                "id": "content",
                "type": "text",
                "label": "Divider Text:"
            },
            ...icon_settings,
            ...base_settings
        ],
        "blocks": [],
        "presets": [
            {
                "name": "gbt-divider",
                "settings": {
                    "content": "Slideshow Preset now set"
                },
                blocks: [],
            }
        ]
    })
}
