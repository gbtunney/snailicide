import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () => {
    const base_settings = require('../partial/settings-wrapper')
    const testimonial_settings = require('./settings')

    return defineSectionSchema({
        "name": "product_testimonial",
        "settings": [...testimonial_settings, ...base_settings],
        "presets": [
            {
                "name": "product_testimonial",
                "settings": {
                    "css_classes": "hello therd!!!!!!!!!!"
                }
            },
        ],
    })
}
