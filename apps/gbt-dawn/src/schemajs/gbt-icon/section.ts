import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () =>{
    const base_settings = require('./../base-section/wrapper-settings')
    const icon_settings = require('./settings')

    return defineSectionSchema({
        "name": "Gillian UI Icon",
       /* "settings": [{
            "type": "checkbox",
            "id": "full_width",
            "default": true,
            "label": "t:sections.rich-text.settings.full_width.label"
        }]
*/
       "settings": [...icon_settings,...base_settings],
        "presets": [
            {
                "name": "gbt-icon",
                blocks:[],
            }
        ]
    })
}
