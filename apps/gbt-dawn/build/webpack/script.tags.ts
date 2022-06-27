const RA = require("ramda-adjunct")
const ensureArray = RA.ensureArray
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const glob = require('glob')
const fs = require('fs')
const LiquidSchemaPlugin = require('liquid-schema-plugin');
const {getFileKeyPairs,getFileArr}=require('./directory.file.list')

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
    schema_keys: {
        input_template: string
        output: string,
        build: {
            schema_json_files: string
        }
        copy: boolean
    }
    assets: Pattern[]
}

/*************** COPY FUNCTIONS *****/
//COPY FUNCTION , NOT TEMPLATES! this is related to the copy function!!!
const getAssetPatterns = (config: Pattern[]): Pattern[] => {
    let assetArr: Pattern[][] = (config) ? config.map((asset) => {
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

/*************** TEMPLATE TYPES *****/
type TConfigTemplateData = {
    app?: {
        js_file_paths: string[],
        css_file_paths: string[],
    },
    script_urls?: string[]
    css_urls?: Record<string, string>
    data_map?: Record<string, object>
}

type TEntryConfig = {
    input_template: string // this can be a glob or an array of single files.
    output_directory: string
    output_filename?: string /// OUTPUT FILENAME WITH NO EXTENSION> IF UNDEFINED, it uses the templates name + prefix
    output_prefix?: string
    context? : string //base path. if not set "__dirname will be used.
    render_template_data?: TConfigTemplateData
}
type THtmlWebpackOptions = {
    inject?: boolean
    minify?: boolean
    template: string    ///these are the single specifoc file names
    filename: string
    context? : string //base path. if not set "__dirname will be used.
}

const ASSET_CONFIG: Pattern[] = [
    {
        from: ["./../../dist/**/*.{js,css}"],
        to: "./../../shopify/assets/[name][ext]",
        force: true
    }
]

/*************** TEMPLATE FUNCTIONS *****/
const ENTRY_CONFIG: TEntryConfig[] = [{
    input_template: `${__dirname}/../../src/template/*`,
    // output_directory: `${__dirname}/../../shopify/snippets`,
    output_directory: `${__dirname}/../../shopify/snippets`,
    output_prefix: 's-'
}
    /*  {
          input_template: `${__dirname}/../../src/sections/!*`,
          // output_directory: `${__dirname}/../../shopify/snippets`,
          output_directory: `${__dirname}/../../shopify/sections`,
          output_prefix: 's-'
      }*/]

const HtmlWebpackDataDefaults = {
    inject: false,
    minify: false,
    // template: path.resolve(__dirname, CONFIG.script_tag.input_template),
    // filename: path.resolve(__dirname, CONFIG.script_tag.output),
}
const getMappedHTMLPluginsBatch = function (_configs: TEntryConfig[], template_data: TConfigTemplateData) {
    return _configs.reduce((accumulator, _config, currentIndex, array): TEntryConfig[] => {
        const _config_arr: TEntryConfig[] = getMappedHTMLPlugins(_config, template_data)
        return [...accumulator, ..._config_arr]
    }, []);
}
const getMappedHTMLPlugins = function (_config: TEntryConfig, template_data: TConfigTemplateData) {
    const {output_prefix, output_directory, output_filename} = _config
    return glob.sync(_config.input_template).map(function (_path: string) {
        ///have input file, figure out output file.
        const _full_path = path.resolve(_path)
        const _filename = (output_filename) ? output_filename : path.basename(_full_path)
        const fullFilePath = `${(output_prefix) ? output_prefix : ''}${_filename}`
        const outputPath = `${output_directory}/${fullFilePath}`
        const HtmlWebpackOptions: THtmlWebpackOptions = {
            ...HtmlWebpackDataDefaults,
            template: path.resolve(_path),
            filename: path.resolve(outputPath),
            ...template_data
        }
        return new HtmlWebpackPlugin(HtmlWebpackOptions)
    });
};

//*** COMPOSE FUNCTION.
const composeTemplateData = (env: boolean): TConfigTemplateData => {
    return {
        app: {
            js_file_paths: getFileArr(path.resolve(`${__dirname}/../../dist/js/*.js`)),
            css_file_paths: getFileArr(path.resolve(__dirname, `${__dirname}/../../dist/css/*.css`)),
        },
        script_urls: [
            //...(env) ? Array.from(Object.values({"windicss-runtime-dom": "https://unpkg.com/windicss-runtime-dom"}))
                //: []],
        ],
        ///the data map will map a directory of .json files to be injected into sections
        data_map: getFileKeyPairs(path.resolve(__dirname, `${__dirname}/../../src/schema/*.json`)),
    }
}

module.exports = (env) => {
    /// PARTS TO THIS:
    // * GET FULLY POPULATED DATA OBJECT
    const dataForTemplatesObject = composeTemplateData(env.development)
    // * GET HTML WEBPACK PLUGIN ARRAY
    const _html_plugins = getMappedHTMLPluginsBatch(ENTRY_CONFIG, dataForTemplatesObject)  //ENTRY_CONFIG,
    return {
        resolve: {
            alias: {
                '@node': path.resolve(__dirname, 'node_modules'),
                '@': path.resolve(__dirname, './../../src/'),
                '@shopify': path.resolve(__dirname, './../../shopify/'),

            },
        },
        module:{
            rules: [
                {
                    test: /\.json5$/i,
                    loader: 'json5-loader',
                    type: 'javascript/auto',
                    options: {
                        esModule: true,
                    },
                },
            ],
        },
        optimization: {
            minimize: false,//(env.development) ? false : true,
        },
        entry: path.resolve(__dirname, "./../../index.ts"),
        plugins: [
            new LiquidSchemaPlugin({
                from: {
                    liquid: `${__dirname}/../../src/sections`,
                    schema: `${__dirname}/../../src/schemajs`
                },
                to: `${__dirname}/../../shopify/sections`
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "./../../dist/**/*"),
                        to: path.resolve(__dirname, "./../../shopify/assets/[name][ext]"),
                    },
                    {
                        from: path.resolve(__dirname, "./../../src/snippets/*.liquid"),
                        to: path.resolve(__dirname, "./../../shopify/snippets/s-[name][ext]")
                    },
                    {
                        from: path.resolve(__dirname, "./../../src/assets/**/*"),
                        to: path.resolve(__dirname,"./../../shopify/assets/[name][ext]"),
                    },
                ],
            }),
            ..._html_plugins,
        ],
    };
};
