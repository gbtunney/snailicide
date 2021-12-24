export const wrapperGrid = {
    /**
     * Sets the Column count
     */
    props: {
        columns: {
            default: false,
            type: [Boolean, Number, String]
        },
        /**
         * Sets the row count
         */
        rows: {
            default: false,
            type: [Boolean, Number, String]
        },
         /**
          * Grid Gap
          */
        grid_gap: {
            default: false,
            type: [Boolean, Number, String]
        }
    },
}

export const wrapperFlex = {
    props: {
        /**
         * Sets the flex direction
         * @values row, column
         */
        direction: {
            default: "row",
            type: [Boolean, String]
        },
        /**
         * Sets the flex wrap
         */
        wrap: {
            default: false,
            type: [Boolean, String]
        },
        /**
         * Sets the Justify content property
         * @values center, stretch, flex-start,flex-end etc/
         */
        justify: {
            default: false,
            type: [Boolean, String]
        },
        /**
         * Sets the Align Items property
         * @values center, stretch, flex-start,flex-end etc/
         */
        align: {
            default: false,
            type: [Boolean, String]
        }
    },
}

export default wrapperFlex
