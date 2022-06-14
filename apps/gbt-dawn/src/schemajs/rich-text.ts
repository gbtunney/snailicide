const icon_settings = require('./gbt-icon-settings')
module.exports ={
    "name": "GillianTIch",
    "tag": "section",
    "class": "section",
    "settings": [
    {
        "type": "select",
        "id": "desktop_content_position",
        "options": [
            {
                "value": "left",
                "label": "t:sections.rich-text.settings.desktop_content_position.options__1.label"
            },
            {
                "value": "center",
                "label": "t:sections.rich-text.settings.desktop_content_position.options__2.label"
            },
            {
                "value": "right",
                "label": "t:sections.rich-text.settings.desktop_content_position.options__3.label"
            }
        ],
        "default": "center",
        "label": "t:sections.rich-text.settings.desktop_content_position.label",
        "info": "t:sections.rich-text.settings.desktop_content_position.info"
    },
    {
        "type": "select",
        "id": "content_alignment",
        "options": [
            {
                "value": "left",
                "label": "t:sections.rich-text.settings.content_alignment.options__1.label"
            },
            {
                "value": "center",
                "label": "t:sections.rich-text.settings.content_alignment.options__2.label"
            },
            {
                "value": "right",
                "label": "t:sections.rich-text.settings.content_alignment.options__3.label"
            }
        ],
        "default": "center",
        "label": "t:sections.rich-text.settings.content_alignment.label"
    },
    {
        "type": "select",
        "id": "color_scheme",
        "options": [
            {
                "value": "accent-1",
                "label": "t:sections.all.colors.accent_1.label"
            },
            {
                "value": "accent-2",
                "label": "t:sections.all.colors.accent_2.label"
            },
            {
                "value": "background-1",
                "label": "t:sections.all.colors.background_1.label"
            },
            {
                "value": "background-2",
                "label": "t:sections.all.colors.background_2.label"
            },
            {
                "value": "inverse",
                "label": "t:sections.all.colors.inverse.label"
            }
        ],
        "default": "background-1",
        "label": "t:sections.all.colors.label"
    },
    {
        "type": "checkbox",
        "id": "full_width",
        "default": true,
        "label": "t:sections.rich-text.settings.full_width.label"
    },
    {
        "type": "header",
        "content": "t:sections.all.padding.section_padding_heading"
    },
    {
        "type": "range",
        "id": "padding_top",
        "min": 0,
        "max": 100,
        "step": 4,
        "unit": "px",
        "label": "t:sections.all.padding.padding_top",
        "default": 40
    },
    {
        "type": "range",
        "id": "padding_bottom",
        "min": 0,
        "max": 100,
        "step": 4,
        "unit": "px",
        "label": "t:sections.all.padding.padding_bottom",
        "default": 52
    }
],
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
        "type":"icon",
        "name": "icon",
        settings:      icon_settings

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
}
