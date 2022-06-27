import {defineSectionSettings} from '@snailicide/g-node-utils'

module.exports = defineSectionSettings([
    {
        "id": "testimonial_data",
        // @ts-expect-error sasasa
        "type": "json",
        "label": "text Data",
        "info":" {\n" +
            "  image_url: string,\n" +
            "  name: string,\n" +
            "  content: string,\n" +
            "  cite_url?: string\n" +
            "}[]"
    },
    {
        "id": "testimonial_active",
        "type": "checkbox",
        "default": false,
        "label": "Testimonial Active",
    },
    {
        "id": "css_classes",
        "type": "text",
        "label": "Add custom css below",
        "default": "bg-blue-500"
    }
])
