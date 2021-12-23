const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
    .default;
var _ = require("lodash");

const defaultVariablesNames = {
    colors: "color",
    screens: "screen",
    fontFamily: "font",
    fontSize: "text",
    fontWeight: "font",
    lineHeight: "leading",
    letterSpacing: "tracking",
    backgroundSize: "bg",
    borderWidth: "border",
    borderRadius: "rounded",
    width: "w",
    height: "h",
    minWidth: "min-w",
    minHeight: "min-h",
    maxWidth: "max-w",
    maxHeight: "max-h",
    padding: "p",
    margin: "m",
    boxShadow: "shadows",
    zIndex: "z",
    opacity: "opacity",
};

module.exports = ({addUtilities, addComponents, theme, config, variants}) => {
    const flatten_colors = flattenColorPalette(theme('colors'));

    let modifiedConfig = {...config('theme'), colors: flatten_colors}
    modifiedConfig = {...modifiedConfig, fontSize: flattenFontSize(config('theme.fontSize'))}
    modifiedConfig = {...modifiedConfig, fontFamily: flattenFontFamily(config('theme.fontFamily'))}
    const newKeys = {
        ...defaultVariablesNames, ...{
            colors: ['bg', 'border', 'text'],
            fontFamily: ["font"],
            fontSize: ["text"],
            padding: ["p", "px", "py", "pt", "pb", "pl", "pr"],
            margin: ["m", "mx", "my", "mt", "mb", "ml", "mr"],
            width: ["w"],
            height: ["h"]
        }
    }
    modifiedConfig = {...modifiedConfig, keys: newKeys}
    writeToFile(modifiedConfig)
};
const flattenFontSize = (obj) => {
    console.log("flattening font size@@@", obj)
    return Object.entries(obj).reduce((prevObj, [key, value]) => {
        const [fontSize, options] = Array.isArray(value) ? value : [value];
        const {lineHeight, letterSpacing} = _.isPlainObject(options)
            ? options
            : {
                lineHeight: options,
            };

        return {
            ...prevObj,
            [key]: fontSize,
            ...(lineHeight === undefined
                ? {}
                : {
                    [`${key}-line-height`]: lineHeight,
                }),
            ...(letterSpacing === undefined
                ? {}
                : {
                    [`${key}-letter-spacing`]: letterSpacing,
                }),
        };
    }, {});
};
const flattenFontFamily = (obj) => {
    return Object.entries(obj).reduce((prevObj, [key, value]) => {
        return {
            ...prevObj,
            [key]: value.join(","),
        };
    }, {});
};
const writeToFile = function (obj, path = 'tailwindDump.json') {
    const fs = require('fs');
    let data = JSON.stringify(obj, null, 4);
    //todo: resolve path
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    console.log('This is after the write call');
}
