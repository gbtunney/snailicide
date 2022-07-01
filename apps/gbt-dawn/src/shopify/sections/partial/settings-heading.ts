import {defineSectionSettings} from '@snailicide/g-node-utils'
module.exports = defineSectionSettings([
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
])
