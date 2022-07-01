import {defineSectionSettings, Shopify} from '@snailicide/g-node-utils'

module.exports = defineSectionSettings<Shopify.SettingAny>([
    {
        "id": "heading",
        "type": "text",
        "label": "Heading:"
    },
    {
        "id": "heading_css",
        "type": "text",
        "label": "Add custom css below",
        "default": "text-2xl text-center"
    },
    {
        "id": "publish_id",
        "type": "text",
        "label": "Curator Publish ID ( from embed code )",
        "default": "8f06d909-ac15-451b-a5b8-0a275b7a44f5"
    },
], "curator_")
