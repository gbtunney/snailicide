const  theme_options =require('./getThemeOptionsFromWindi')
import {defineSectionSettings} from '@snailicide/g-node-utils'
module.exports = defineSectionSettings([
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
    "id": "wrapper_css_classes",
    "type": "text",
    "label": "Add wrapper css below",
    "default": "bg-blue-500"
  },
    {
      "type": "select",
      "id": "color_scheme",
      "options": theme_options,
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
  ])
