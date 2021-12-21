const path = require("path");
module.exports = {
    // set your styleguidist configuration here
    title: 'Default Style Guide',
    // components: '/src/components/**/[A-Z]*.vue',
    // defaultExample: true,
    sections: [
        {
            name: 'GILLIAN Section',
            components: 'src/components/**/[A-Z]*.vue'
        },
        {
            name: 'UI Components',
            components: ['src/components/ui/*.vue', 'src/components/ui/*.js'],
        },
        {
            name: "Landnig Page",
            content: 'README.md'
        }
    ],
    // webpackConfig: {
    //   // custom config goes here
    // },
    exampleMode: 'expand',
    require: [
        path.join(__dirname, './src/main.styleguide.ts')
    ]
}
