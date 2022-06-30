import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () =>{
    const base_settings = require('../partial/settings-wrapper')
    const testimonial_settings = require('./settings')

    return defineSectionSchema({
        "name": "product_testimonial",

       /* "settings": [{
            "type": "checkbox",
            "id": "full_width",
            "default": true,
            "label": "t:sections.rich-text.settings.full_width.label"
        }]
*/
        "presets": [
          // @ts-expect-error jkj
            {
                "name": "product_testimonial",
                "settings": {
                    "css_classes": "hello therd!!!!!!!!!!"
                }
            },


],
       "settings": [...testimonial_settings,...base_settings]
    })
}
