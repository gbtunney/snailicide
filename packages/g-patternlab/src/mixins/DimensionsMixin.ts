export const DimensionsMixin = {
    props: {
        /** Width
         * @values String (with unit), integer(px appended to end), boolean (on/off)
         */
        width: {
            default: false,
            type: [String, Number, Boolean],
        },
        /** Height
         * @values String (with unit), integer(px appended to end), boolean (on/off)
         */
        height: {
            default: false,
            type: [String, Number, Boolean],
        },
    },
}
