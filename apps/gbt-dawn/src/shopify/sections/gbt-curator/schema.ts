import {defineSectionSchema, Shopify} from '@snailicide/g-node-utils'

module.exports = () => {
    const base_settings = require('../partial/settings-wrapper')

    return defineSectionSchema({
        "name": "Curator IO",
        "tag": "section",
        "settings": [
            {
                "id": "curator_heading",
                "type": "text",
                "label": "Heading:"
            },
            {
                "id": "curator_heading_css",
                "type": "text",
                "label": "Add custom css below",
                "default": "text-2xl text-center"
            },
            {
                "id": "curator_publish_id",
                "type": "text",
                "label": "Curator Publish ID ( from embed code )",
                "default": "8f06d909-ac15-451b-a5b8-0a275b7a44f5"
            },
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
