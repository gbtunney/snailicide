/*
Anchor link to section titled "Specialized input settings"
The following are the specialized input setting types:

article
blog
collection
collection_list
color
color_background
font_picker
html
image_picker
link_list
liquid
page
product
product_list
richtext
url
video_url
*/

export module namespace {
    /* * Shopify Section Schema *
    * @see https://shopify.dev/themes/architecture/settings/input-settings#standard-attributes */
    export type TElementTag = "div" | "article" | "aside" | "footer" | "header" | "section"

    export type TBasicInputSettingType =
        "text"
        | "textarea"
        | "number"
        | "checkbox"
        | "radio"
        | "range"
        | "select"

    export type TSpecializedSettingType =
        "article"
        | "blog"
        | "collection"
        | "collection_list"
        | "color"
        | "color_background"
        | "font_picker"
        | "html"
        | "image_picker"
        | "link_list"
        | "liquid"
        | "page"
        | "product"
        | "product_list"
        | "richtext"
        | "url"
        | "video_url"

    export type TSelectOption= {
        value: string;
        label: string; // is label required idk?
    }

    export type TTextBase =  {
        default?:string
        placeholder?: string
    }
    export type TText = TTextBase & {
        type: "text"
    }
    export type TTextArea = TTextBase & {
        type: "textarea"
    }
    export type TNumber =  {
        type:"number"
        default?:number
        placeholder?:number
    }
    export type TCheckbox =  {
        type:"checkbox"
        default?:boolean  //default is false
    }
    export type TRadio ={
        type: "radio",
        options: TSelectOption[],
        default?: string //If default is unspecified, then the first option is selected by default.
    }
    export type TSelect = Omit<TRadio,"type"> & {
        type:"select",
        group?: string /// no other info providewd
    }
    export type TRange ={
        type: "range",
        default: number, //!!! NOTE ! REQUIRED HERE
        min: number,
        max: number,
        step: number
        unit: string    // "example px",
    }
    export type TSectionSetting = {
        id: string;
        label: string;
        info?: string;
        //type
        /// default
    }
    export type TBasicInputSettingProps<T> = T extends "text"
        ? TText
        : T extends "textarea"
            ? TTextArea
            : T extends "number"
                ? TNumber
                : T extends "checkbox"
                    ? TCheckbox
                    : T extends "radio"
                        ? TRadio
                        : T extends "range"
                            ? TRange
                            : T extends "select"
                                ? TSelect
                                : never



    export type test2Setting<T> = TSectionSetting &  TBasicInputSettingProps<T>
    const testme : test2Setting<"select"> = {
        id:"jjk",
        label:"klkk",
        type:"select",
options:[{ value: 'string' , label:'klkl' }]

    }
    console.log(testme)
     export interface Option {
        value: string;
        label: string;
    }

    export interface Setting {
        type: string;
        id: string;
        label: string;
        default: any;

        options: Option[];
        info: string;
        content: string;
        min?: number;
        max?: number;
        step?: number;
        unit: string;
    }

    export interface Option2 {
        value: string;
        label: string;
    }

    export interface Setting2 {
        type: string;
        id: string;
        default: any;
        label: string;
        options: Option2[];
        info: string;
    }

    export interface Block {
        type: string;
        name: string;
        limit: number;
        settings: Setting2[];
    }

    export interface Block2 {
        type: string;
    }

    export interface Preset {
        name: string;
        blocks: Block2[];
    }


    export interface SectionSchema {
        name: string;
        tag: TElementTag;
        class: string;
        limit: number; // section limit count
        settings: Setting[];
        blocks: Block[];
        presets: Preset[];
    }

}


/**
 * Tag
 * @example
 * ```js
 * {
  "name": "Slideshow",
  "tag": "section",
  "class": "slideshow"
}
 ```html
 <section id="shopify-section-[id]" class="shopify-section slideshow">
 // Output of the section content
 </section>

 * isNumberParseable('AAAA');
 * //=> false
 *
 * isNumberParseable('100');
 * //=> true
 *
 * if (!isNumberParseable(value))
 *   throw new Error('Value can\'t be parseable to `Number`.')
 * return Number(value);
 * ```
 * @param value - An `unknown` value to be checked.
 */
