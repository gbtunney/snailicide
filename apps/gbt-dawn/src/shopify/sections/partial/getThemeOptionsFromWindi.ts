const {properCase, unhyphenate} = require("@snailicide/g-library");
const theme_options = () => {
    const wildcard = require('wildcard');
    const {unhyphenate, properCase} = require('@snailicide/g-library');
    const windiConfig = require('./../../../../windi.config').windiConfig

    return Object.keys(windiConfig.shortcuts).filter((str) => (wildcard('theme-*', str).length > 0))
        .map((str): Record<string, string> => {
            const [, _str] = str.split('theme-')
            return {
                "value": str,
                "label": properCase(unhyphenate(_str))
            }

        })
}
const svg_select = () => {
    const {getFileArr} = require('./../../../../build/webpack/directory.file.list')

    return [{"value": 'none', label: 'none'}, ...getFileArr(`${__dirname}/../../assets/svg/*.svg`).map((file) => {
        return {
            "value": `%ASSET%${file}`,
            "label": file
        }
    })]
}

module.exports = {theme_options, svg_select}
