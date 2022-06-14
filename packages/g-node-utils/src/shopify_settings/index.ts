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
    export type TList = {    //collection and product list
        limit?: number
    }

    /* * Section Settings  *
    * Info: Add links
    * @example
    * "Each customer will see their preferred payment method from those available on your store,
    * such as PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/online-store/dynamic-checkout)" */
    export type TSectionSettingProps = {
        id: string;
        label: string;
        info?: string;
    }

    export type TSidebarSettingType = "header" | "paragraph"

    export type TSidebarSetting<T> = {
        type: T extends TSidebarSettingType ? T :never
        content:string
        info?:string
    }

    export type TSelectOption = {
        value: string;
        label: string; // is label required idk?
    }

    export type TTextBase = {
        default?: string
        placeholder?: string
    }

    export type TBasicInputSettingType =
        "text"
        | "textarea"
        | "number"
        | "checkbox"
        | "radio"
        | "range"
        | "select"

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

    /* * Color Picker  *
    * @return "color object" | "blank" */
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

    export type TSpecializedSettingType =
        "color"
        | "color_background"
        | "font_picker"
        | "html"
        | "richtext"
        | "url"
        | "video_url"

    export type TSpecializedSettingTypeProps<T> = T extends "color"
        ? TColor
        : T extends "color_background"
            ? TColorBackground
            : T extends "font_picker"
                ? TFontPicker
                : T extends "html"
                    ? THTML
                    : T extends "richtext"
                        ? TRichText
                        : T extends "url"
                            ? TURL
                            : T extends "video_url"
                                ? TVideoURL
                                : never

    export  type TShopifySettingType =
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

    /* * Article Picker *
   * @return "article object" | "blank" */
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

    export type TShopifySettingTypeProps<T> = T extends "article"
        ? TArticle
        : T extends "blog"
            ? TBlog
            : T extends "collection"
                ? TCollection
                : T extends "collection_list"
                    ? TCollectionList
                    : T extends "image_picker"
                        ? TImagePicker
                        : T extends "link_list"
                            ? TLinkList
                            : T extends "liquid"
                                ? TLiquid
                                : T extends "page"
                                    ? TPage
                                    : T extends "product"
                                        ? TProduct
                                        : T extends "product_list"
                                            ? TProductList
                                            : never

    export type TSectionSetting<T> =
        T extends TBasicInputSettingType
            ? TSectionSettingProps & TBasicInputSettingProps<T>
            : T extends TSpecializedSettingType
                ? TSectionSettingProps & TSpecializedSettingTypeProps<T>
                : T extends TShopifySettingType
                    ? TSectionSettingProps & TShopifySettingTypeProps<T>
                    : T extends TSidebarSettingType
                        ? TSidebarSetting<T>
                        : never

    const testme: TSidebarSetting<"header">  =  {
        "type": "header",
"content":"jkjkjjk"
    }
    console.log("test",testme)

    export interface Block<T=unknown> {
        type: string;
        name: string;
        limit: number;
        settings: TSectionSetting<T>[];
    }

    export interface Preset<T=unknown> {
        name: string;
        blocks: Pick<Block<T>,"type">[];
    }

    export interface SectionSchema<T=unknown> {
        name: string;
        tag: TElementTag;
        class: string;
        limit: number; // section limit count
        settings:  TSectionSetting<T>[];
        blocks: Block<T>[];
        presets: Preset[];
    }
}

export const defineSectionSetting = <T = unknown>(value: Shopify.TSectionSetting<T>): value is Shopify.TSectionSetting<T> => ( value !== undefined )
export const defineSectionSettings = <T = unknown>(value: Shopify.TSectionSetting<T>[]): Shopify.TSectionSetting<T>[] => value

export const defineSectionSchema = <T = unknown>(value: Shopify.SectionSchema<T>): value is Shopify.SectionSchema<T> =>  ( value !== undefined )
