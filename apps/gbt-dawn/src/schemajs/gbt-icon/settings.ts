import {defineSectionSettings} from '@snailicide/g-node-utils'

module.exports = defineSectionSettings([
    {
        "id": "icon_path",
        "type": "text",
        "label": "Icon Path or SVG Filename:",
        "default": "mdi:alert"
    },
    {
        "type": "checkbox",
        "id": "color_toggle",
        "default": false,
        "label": "Override color",
        "info": "Use TAILWIND classes for text-red-500 etc."
    },
    {
        "type": "color",
        "id": "icon_color",
        "label": "Color",
        "default": "#3d4246"
    },
    {
        "id": "custom_styles",
        "type": "text",
        "label": "Text",
        "default": "font-size: 48px;"
    },
    {
        "id": "css_classes",
        "type": "text",
        "label": "Add custom css below",
        "default": "bg-blue-500"
    }
])
