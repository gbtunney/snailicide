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

export module Shopify {
    /* * Shopify Section Schema *
    * @see https://shopify.dev/themes/architecture/settings/input-settings#standard-attributes */
    export type TElementTag = "div" | "article" | "aside" | "footer" | "header" | "section"
    export type TSystemFonts = "serif" | "sans-serif" | "mono"
    export type TEmptyDrop = "EmptyDrop" /// shopify's emptydrop type objjectEmptyDrop
    type TList = {    //collection and product list
        limit?: number
    }

    export type TSelectOption = {
        value: string;
        label: string; // is label required idk?
    }

    type TTextBase = {
        default?: string
        placeholder?: string
    }

    export module Type {

        export type BasicInput =
            "text"
            | "textarea"
            | "number"
            | "checkbox"
            | "radio"
            | "range"
            | "select"

        export type SpecializedInput =
            "color"
            | "color_background"
            | "font_picker"
            | "html"
            | "richtext"
            | "url"
            | "video_url"

        export type ShopifyInput =
            "article"
            | "blog"
            | "collection"
            | "collection_list"
            | "image_picker"
            | "link_list"
            | "liquid"
            | "page"
            | "product"
            | "product_list"

        export type Sidebar =
            "header"
            | "paragraph"

        export type All = BasicInput | SpecializedInput | ShopifyInput | Sidebar
    }
    export module Setting {
        export type TText = TTextBase & {
            type: "text"
        }
        export type TTextArea = TTextBase & {
            type: "textarea"
        }
        export type TNumber = {
            type: "number"
            default?: number
            placeholder?: number
        }
        export type TCheckbox = {
            type: "checkbox"
            default?: boolean  //default is false
        }
        export type TRadio = {
            type: "radio",
            options: TSelectOption[],
            default?: string //If default is unspecified, then the first option is selected by default.
        }
        export type TSelect = Omit<TRadio, "type"> & {
            type: "select",
            group?: string /// no other info providewd
        }
        export type TRange = {
            type: "range",
            default: number, //!!! NOTE ! REQUIRED HERE
            min: number,
            max: number,
            step: number
            unit: string    // "example px",
        }

        /* * Color Picker  *
        * * @return "color object" | "blank" */
        export type TColor = {
            type: "color"
            default?: string    //in hex code string format "#000000"
        }

        /* * Gradient Picker
        * Color Background aka Gradient  *
        * @return string | "blank" */
        export type TColorBackground = {
            type: "color_background"
            default?: string    // example: "linear-gradient(#ffffff, #000000)"
        }
        export type TGradient = TColorBackground

        /* * Font Picker - From Shopify Font Library *
        * @see https://shopify.dev/themes/architecture/settings/fonts#shopify-font-library
        * cant add custom fonts. -- it says you can use typekit but i dont know if it can populate this selector. ???
        * @return font object
        * default is NOT allowed.
        *  */
        export type TFontPicker = {
            type: "font_picker",
            default: string ///NOTE: THIS IS REQUIRED!!!  example "helvetica_n4"
        }

        /* * HTML Type *
        * @values Not allowed: html | head | body
        * @return string |  EmptyDrop */
        export type THTML = {
            type: "html"
            default?: HTMLElement ///dont know if default , dont know if html elemenbt type will work
            placeholder?: HTMLElement
        }

        /* * Rich Text  *
        * Supported Tags: p | br | strong | b | em | i | u | span
        * * * @return string | "EmptyDrop"  */
        export type TRichText = {
            type: "richtext"
            default?: string //default must be wrapped in <p></p>
        }

        /* * URL Picker  *
        * manually enter external URLs and relative paths and
        * Picker for Articles | Blogs | Collections | Pages | Products
        * @return string | nil
        * NOTE: ( IDK WHY ONLY COLLECTIONS? )
        * - Accepted values for the default attribute are /collections and /collections/all.  */
        export type TURL = {
            type: "url"
            default?: string //Accepted values are /collections and /collections/all IDK???
        }

        /* * VideoURL
        * Accept: Takes an array of accepted video providers. Valid values are youtube, vimeo, or both.*
        * @return string ( entered url ) | nil */
        export type TVideoURL = {
            type: "video_url"
            placeholder?: string
            accept: ["youtube"] | ["vimeo"] | ["youtube", "vimeo"]
        }

        /* * Article Picker *
        * * @return "article object" | "blank" */
        export type TArticle = {
            type: "article"
        }
        /* * Blog Picker *
        * @return "blog object" | "blank" */
        export type TBlog = {
            type: "blog"
        }
        /* * Collection Picker *
        * @return "collection object" | "blank" */
        export type TCollection = {
            type: "collection"
        }
        /* * Collection List  *
        * @return "Array<collection object>" | "blank" */
        export type TCollectionList = TList & {
            type: "collection_list"
        }
        /* * Image Picker Type *
        * automatically populated with the available images from the Files section of Shopify admin,
        * Has the option to upload new images.
        * SVG IS NOT ALLOWED! , favicons are ? .ico???
        * @return  'image object' | nil  */
        export type TImagePicker = {
            type: "image_picker"
        }

        /* * Linked List *
        * ID is the identifier
        * @see https://shopify.dev/api/liquid/objects/linklist
        * A setting of type link_list outputs a menu picker field that's automatically populated with the available menus for the store.
        * You can use these fields to capture a menu selection, such as the menu to use for footer links.
        * @return 'linklist object' or 'blank' */
        export type TLinkList = {
            type: "link_list"
        }

        /* * Liquid Type *
        * Can access :
        * - Global Liquid objects
        * - Template specific objects like collection, product, etc. (within their respective templates)
        * - Standard Liquid tags and filters
        * @see https://shopify.dev/themes/architecture/settings/input-settings FOR LIMITATIONS ( there are alot@! ) */
        export type TLiquid = {
            type: "liquid"
            default?: string
        }

        /* * Page Picker *
        * @return "page object" | "blank" (different return than similar types??) */
        export type TPage = {
            type: "page"
        }
        /* * Product Picker *
        * * @return "product" | "blank" (different return than similar types??) */
        export type TProduct = {
            type: "product"
        }

        /* * Product List Picker *
        * * @return "Array<product>" | "blank" (different return than similar types??) */
        export type TProductList = TList & {
            type: "product_list"
        }

        export type TSidebarHeader = {
            type: "header"
        }
        export type TSidebarParagraph = {
            type: "paragraph"
        }
    }

    /* * Section Settings  *
    * Info: Add links
    * @example
    * "Each customer will see their preferred payment method from those available on your store,
    * such as PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/online-store/dynamic-checkout)" */
    export type TSectionSettingBaseProps = {
        id: string;
        label: string;
        info?: string;
    }

    export module SettingType {
        export type TSidebar<T> = (T extends "header"
            ? Setting.TSidebarHeader
            : T extends "paragraph"
                ? Setting.TSidebarParagraph
                : never
            ) & {
            content: string
            info?: string
        }

        export type TBasic<T> = (T extends "text"
            ? Setting.TText
            : T extends "textarea"
                ? Setting.TTextArea
                : T extends "number"
                    ? Setting.TNumber
                    : T extends "checkbox"
                        ? Setting.TCheckbox
                        : T extends "radio"
                            ? Setting.TRadio
                            : T extends "range"
                                ? Setting.TRange
                                : T extends "select"
                                    ? Setting.TSelect
                                    : never
            ) & TSectionSettingBaseProps

        export type TSpecialized<T> = (T extends "color"
            ? Setting.TColor
            : T extends "color_background"
                ? Setting.TColorBackground
                : T extends "font_picker"
                    ? Setting.TFontPicker
                    : T extends "html"
                        ? Setting.THTML
                        : T extends "richtext"
                            ? Setting.TRichText
                            : T extends "url"
                                ? Setting.TURL
                                : T extends "video_url"
                                    ? Setting.TVideoURL
                                    : never
            ) & TSectionSettingBaseProps

        export type TShopify<T> = (T extends "article"
            ? Setting.TArticle
            : T extends "blog"
                ? Setting.TBlog
                : T extends "collection"
                    ? Setting.TCollection
                    : T extends "collection_list"
                        ? Setting.TCollectionList
                        : T extends "image_picker"
                            ? Setting.TImagePicker
                            : T extends "link_list"
                                ? Setting.TLinkList
                                : T extends "liquid"
                                    ? Setting.TLiquid
                                    : T extends "page"
                                        ? Setting.TPage
                                        : T extends "product"
                                            ? Setting.TProduct
                                            : T extends "product_list"
                                                ? Setting.TProductList
                                                : never
            ) & TSectionSettingBaseProps
    }

    export type Setting<T> = & TSectionSettingBaseProps & T extends Type.BasicInput
        ? SettingType.TBasic<T>
        : T extends Type.SpecializedInput
            ? SettingType.TSpecialized<T>
            : T extends Type.ShopifyInput
                ? SettingType.TShopify<T>
                : T extends Type.Sidebar
                    ? SettingType.TSidebar<T>
                    : never

    export interface Block<T = Type.All> {
        type: string;
        name: string;
        limit?: number;
        settings: Setting<T>[];
    }
  /* export type PresetSettings<S> = {
        [P in keyof S]?: T[P];
    }*/
    export interface Preset<T =  Type.All> {
        name: string;
        blocks?: Pick<Block<T>, "type">[];
        settings?: unknown
        /* {
            "title": "Slideshow"
        },*/
    }

    export interface SectionSchema<T = Type.All> {
        name: string;
        settings: Setting<T>[];
        tag?: TElementTag;
        class?: string;
        limit?: number; // section limit count
        blocks?: Block<T>[];
        presets?: Preset[];
    }
}
import * as RA from "ramda-adjunct"

export const defineSectionSettings = <T = Shopify.Type.All>(value: Shopify.Setting<T> | Shopify.Setting<T>[]): Shopify.Setting<T>[] => RA.ensureArray(value)
export const defineSectionSchema = <T = Shopify.Type.All>(value: Shopify.SectionSchema<T>): Shopify.SectionSchema<T> => value

import type {ValueOf} from 'type-fest';
/*export const getData = <T = Shopify.Type.All>(value:Shopify.Setting<T> | Shopify.Setting<T>[] , key: string): ValueOf<typeof data> {

    //   return data[name];
}*/
import  R from "ramda"
//import * as RA from "ramda-adjunct"
export const definePreset = <T = 'text'>(setting:Shopify.Setting<T>, key: ValueOf<Shopify.Setting<"text">, 'id'>)=>{
    const [_setting] = defineSectionSettings(setting)
    const setting_obj_no_id= R.omit(["id"], (   _setting as Shopify.TSectionSettingBaseProps ) )

    return  { [key] : setting_obj_no_id }
}
const testme  = definePreset( {
    "id": "css_classes",
    "type": "text",
    "label": "Add custom css below",
    "default": "bg-blue-500"
}, "css_clanmsses")

console.log("jkjkjk",testme)
export const definePresets = <T = Shopify.Type.All>(value: Shopify.SectionSchema<T>, key = "id")=>{
    const _settings = defineSectionSettings(value.settings)
     const new = _settings.reduce((accumulator, setting: Shopify.Setting<T> ) => {
       //console.log("::: REDUCE :::: TOTAL:",accumulator ," currentValue:", currentValue)
         //./thhis is a hack
         //ValueOf<typeof data, 'bar'>
        const setting_obj_no_id= R.omit(["id"], (   setting as Shopify.TSectionSettingBaseProps ) )
         const _id =(   setting as Shopify.TSectionSettingBaseProps )?.id

       return { ...accumulator, ... { [_id] : setting_obj_no_id }}
     }, {});
}
