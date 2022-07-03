import {defineSectionSettings, Shopify} from '@snailicide/g-node-utils'

const _icon_settings = () => {
    const {svg_select} = require('./../partial/getThemeOptionsFromWindi')
    return defineSectionSettings<Shopify.SettingAny>([
        {
            "id": "icon_path",
            "type": "text",
            "label": "Icon Path or SVG Filename:",
            "default": "mdi:alert",
            "info": "%ASSET% : For asset_url \nor can take URL or iconify icon with :"
        },
        {
            "type": "select",
            "id": "svg_path",
            "options": svg_select(),
            "label": "Svg selection:"
        },
        {
            "type": "checkbox",
            "id": "color_toggle",
            "default": false,
            "label": "Override color",
            "info": "Use TAILWIND classes for text-red-500 etc."
        },
        {
            "id": "icon_color",
            "type": "color",
            "label": "Color",
            "default": "#3d4246"
        },
        {
            "id": "css_classes",
            "type": "text",
            "label": "Add custom css below",
            "default": "bg-blue-500"
        }
    ])
}
module.exports = _icon_settings()
