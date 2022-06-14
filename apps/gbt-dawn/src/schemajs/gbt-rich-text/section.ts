import {defineSectionSchema} from '@snailicide/g-node-utils'

module.exports = () => {
    const icon_settings = require('./../gbt-icon/settings')
    const base_settings = require('./../base-section/wrapper-settings')
    return defineSectionSchema({
        "name": "g UI Rich Text",
        "tag": "section",
        "class": "section",
        "settings": [...base_settings],
        "blocks": [
            {
                "type": "heading",
                "name": "t:sections.rich-text.blocks.heading.name",
                "limit": 3,
                "settings": [
                    {
                        "type": "richtext",
                        "id": "heading",
                        "default": "<p>Talk about your brand</p>",
                        "label": "t:sections.rich-text.blocks.heading.settings.heading.label"
                    },
                    {
                        "type": "select",
                        "id": "heading_size",
                        "options": [
                            {
                                "value": "h2",
                                "label": "t:sections.all.heading_size.options__1.label"
                            },
                            {
                                "value": "h1",
                                "label": "t:sections.all.heading_size.options__2.label"
                            },
                            {
                                "value": "h0",
                                "label": "t:sections.all.heading_size.options__3.label"
                            },
                            {
                                "value": "hxl",
                                "label": "t:sections.all.heading_size.options__4.label"
                            }
                        ],
                        "default": "h1",
                        "label": "t:sections.all.heading_size.label"
                    }
                ]
            },
            {
                "type": "caption",
                "name": "t:sections.rich-text.blocks.caption.name",
                "limit": 3,
                "settings": [
                    {
                        "type": "text",
                        "id": "caption",
                        "default": "Add a tagline",
                        "label": "t:sections.rich-text.blocks.caption.settings.text.label"
                    },
                    {
                        "type": "select",
                        "id": "text_style",
                        "options": [
                            {
                                "value": "subtitle",
                                "label": "t:sections.rich-text.blocks.caption.settings.text_style.options__1.label"
                            },
                            {
                                "value": "caption-with-letter-spacing",
                                "label": "t:sections.rich-text.blocks.caption.settings.text_style.options__2.label"
                            }
                        ],
                        "default": "caption-with-letter-spacing",
                        "label": "t:sections.rich-text.blocks.caption.settings.text_style.label"
                    },
                    {
                        "type": "select",
                        "id": "text_size",
                        "options": [
                            {
                                "value": "small",
                                "label": "t:sections.rich-text.blocks.caption.settings.caption_size.options__1.label"
                            },
                            {
                                "value": "medium",
                                "label": "t:sections.rich-text.blocks.caption.settings.caption_size.options__2.label"
                            },
                            {
                                "value": "large",
                                "label": "t:sections.rich-text.blocks.caption.settings.caption_size.options__3.label"
                            }
                        ],
                        "default": "medium",
                        "label": "t:sections.rich-text.blocks.caption.settings.caption_size.label"
                    }
                ]
            },
            {
                "type": "text",
                "name": "t:sections.rich-text.blocks.text.name",
                "limit": 3,
                "settings": [
                    {
                        "type": "richtext",
                        "id": "text",
                        "default": "<p>Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.</p>",
                        "label": "t:sections.rich-text.blocks.text.settings.text.label"
                    }
                ]
            },
            {
                "type": "button",
                "name": "t:sections.rich-text.blocks.buttons.name",
                "limit": 2,
                "settings": [
                    {
                        "type": "text",
                        "id": "button_label",
                        "default": "Button label",
                        "label": "t:sections.rich-text.blocks.buttons.settings.button_label_1.label",
                        "info": "t:sections.rich-text.blocks.buttons.settings.button_label_1.info"
                    },
                    {
                        "type": "url",
                        "id": "button_link",
                        "label": "t:sections.rich-text.blocks.buttons.settings.button_link_1.label"
                    },
                    {
                        "type": "checkbox",
                        "id": "button_style_secondary",
                        "default": false,
                        "label": "t:sections.rich-text.blocks.buttons.settings.button_style_secondary_1.label"
                    },
                    {
                        "type": "text",
                        "id": "button_label_2",
                        "label": "t:sections.rich-text.blocks.buttons.settings.button_label_2.label",
                        "info": "t:sections.rich-text.blocks.buttons.settings.button_label_2.info"
                    },
                    {
                        "type": "url",
                        "id": "button_link_2",
                        "label": "t:sections.rich-text.blocks.buttons.settings.button_link_2.label"
                    },
                    {
                        "type": "checkbox",
                        "id": "button_style_secondary_2",
                        "default": false,
                        "label": "t:sections.rich-text.blocks.buttons.settings.button_style_secondary_2.label"
                    }
                ]
            },
            {
                "type": "icon",
                "name": "icon",
                settings: icon_settings
            }
        ],
        "presets": [
            {
                "name": "t:sections.rich-text.presets.name",
                "blocks": [
                    {
                        "type": "heading"
                    },
                    {
                        "type": "text"
                    },
                    {
                        "type": "button"
                    },
                    {
                        "type": "icon"
                    }
                ]
            }
        ]
    })
}
