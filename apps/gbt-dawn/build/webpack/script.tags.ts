const {tg_isPrimitive}=require("@snailicide/g-library");


const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const glob = require('glob')
const fs = require('fs')

const {isObjLike,isString,isPair} = require("ramda-adjunct")

module.exports = (env) => {

    return {
        optimization: {
            minimize: false,//(env.development) ? false : true,
        },
        entry: path.resolve(__dirname, "./../../index.ts"),
    /*    plugins: [
            ..._html_plugins,
            new CopyPlugin({
                patterns: [...getAssetPatterns(ASSET_CONFIG)]
            }),
        ],*/
    };
};
