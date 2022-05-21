const RA = require("ramda-adjunct")
const ensureArray = RA.ensureArray
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require("glob");
const CopyPlugin = require('copy-webpack-plugin')

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

type Pattern = {
    from: string | string[]
    to: string,
    force?: boolean
}

type ShopifyBoilerplateConfig = {
    script_tag: {
        input_template: string
        output: string,
        build: {
            js: string
            css: string
        }
        copy: boolean
    }
    assets: Pattern[]
}

const CONFIG: ShopifyBoilerplateConfig = {
    script_tag: {
        input_template: "./../template/template-script-tag.liquid",
        output: "./../../shopify/snippets/s-script-tag.liquid",
        build: {
            js: "./../../dist/js/*.js",
            css: "./../../dist/css/*.css",
        },
        copy: true
    },
    assets: [
        {
            from: ["./../../dist/**/*.{js,css}"],
            to: "./../../shopify/assets/[name][ext]",
            force: true
        },
        {
            from: ["./../../src/shopify/assets/**/*"],
            to: "./../../shopify/assets/[name][ext]"
        },
        {
            from: ["./../../src/shopify/snippets/**/*.liquid"],
            to: "./../../shopify/snippets/s-[name][ext]"
        }]
    //ls src/assets/**/*.{eot,json,ttf,woff,woff2,js,css,svg,js,vue}
    // ls src/assets/**/*.{js,scss.liquid}
}

const script_tag_options = {
    inject: false,
    minify: false,
    template: path.resolve(__dirname, CONFIG.script_tag.input_template),
    filename: path.resolve(__dirname, CONFIG.script_tag.output),
    files_js: getFileArr(path.resolve(__dirname, CONFIG.script_tag.build.js)),
    files_css: getFileArr(path.resolve(__dirname, CONFIG.script_tag.build.css)),
}

const get_script_tag_options = (env: boolean) => {
    return {
        ...{script_url: (env) ? ["https://unpkg.com/windicss-runtime-dom"] : []},
        ...script_tag_options
    }
}

const getAssetPatterns = (config: ShopifyBoilerplateConfig): Pattern[] => {
    let assetArr: Pattern[][] = (config.assets) ? config.assets.map((asset) => {
        const sources: string[] = ensureArray(asset.from)
        return sources.map((item) => {
            return getCopyPattern(item, asset.to)
        })
    }) : []
    return assetArr.reduce((accumulator, currentValue, currentIndex, array) => {
        return [...accumulator, ...ensureArray(currentValue)]
    }, []);
}

const getCopyPattern = (from: string, to: string): Pattern => {
    return {
        from: path.resolve(__dirname, from),
        to: path.resolve(__dirname, to),
        force: true,
    }
}
module.exports = (env) => {
    return {
        optimization: {
            minimize: false,//(env.development) ? false : true,
        },
        entry: path.resolve(__dirname, "./../../index.ts"),
        plugins: [
            new HtmlWebpackPlugin(get_script_tag_options(env.development)),
            new CopyPlugin({
                patterns: [...getAssetPatterns(CONFIG)]
            }),
        ],
    };
};
