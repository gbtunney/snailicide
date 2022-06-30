const wildcard = require('wildcard');
const {unhyphenate, properCase} = require('@snailicide/g-library');
const windiConfig = require('./../../../../windi.config').windiConfig

const option_themes = Object.keys(windiConfig.shortcuts).filter((str) => (wildcard('theme-*', str).length > 0))
    .map((str): Record<string, string> => {
        const [, _str] = str.split('theme-')
        return {
            "value": str,
            "label": properCase(unhyphenate(_str))
        }

    })
module.exports = option_themes
