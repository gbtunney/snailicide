const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require("glob");

const base_directory = path.dirname("index.ts")
const getFileArr = function (_globpath: string) {
    return glob.sync(_globpath).map(function (_path: string) {
        const regex: RegExp = /[A-Za-z0-9_\-\.]+\.[A-Za-z0-9]+$/;
        const matchArr: RegExpMatchArray | null = _path.toString().match(regex);
        if (matchArr === null) return undefined
        if ((matchArr !== null || matchArr !== undefined)
            && matchArr.length > 0) {
            const [filename] = matchArr
            return filename;
        }
    });
};

const config_options = {
    input_template: path.resolve(__dirname, "public/template-script-tag.liquid"),
    output_filename: path.resolve(
        __dirname,
        "shopify/snippets/script-tag.liquid"
    ),
    directory_js: path.resolve(__dirname, "dist/js/*.js"),
    directory_css: path.resolve(__dirname, "dist/css/*.css"),
};

const {
    output_filename: filename,
    input_template: template,
    directory_js,
    directory_css,
} = config_options;

const options = {
    inject: false,
    minify: false,
    template,
    filename,
    files_js: getFileArr(directory_js),
    files_css: getFileArr(directory_css),
}
module.exports = {
    entry: path.resolve(__dirname, "index.ts"),
    plugins: [
        new HtmlWebpackPlugin(options),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "dist/css/*.css"),
                    to: path.resolve(__dirname, "shopify/assets/[name][ext]"),
                },
                {
                    from: path.resolve(__dirname, "dist/js/*.js"),
                    to: path.resolve(__dirname, "shopify/assets/[name][ext]"),
                },
                {
                    from: path.resolve(__dirname, "src/assets/**/*"),
                    to: path.resolve(__dirname, "shopify/assets/[name][ext]"),
                },
            ],
        }),
    ],
};
