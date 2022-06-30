import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () =>{
    const base_settings = require('./../base-section/wrapper-settings')
    const icon_settings = require('./../gbt-icon/settings')

    return defineSectionSchema({
        "name": "Gillian UI Divider",
        "settings": [
            ...icon_settings,
            {
                "id": "content",
                "type": "text",
                "label": "Divider Text:"
            },
            ...base_settings
        ],blocks:[],
        "presets": [
            {
                "name": "gbt-divider",
                blocks:[],
            }
        ]
    })
}
