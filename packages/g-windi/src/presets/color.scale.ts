import getColorScaleMap from "@/scripts/colorScale";

const colorScaleObj = {
    "newgumleaf": {
        default_color: "afd3c2"
    },
    "gradient": {
        scale: ['yellow', 'red', 'black'],
        default_color: 'red',
        color_count: 9
    },
    "potter-winkle": {
        default_color: 'CCCCFF'
    }
}
export const colorScalePresetFactory = (scale_map = colorScaleObj) => {
    return {
        theme: {
            extend: {
                colors: getColorScaleMap(scale_map)
            }
        },
    }
}
export default colorScalePresetFactory();
