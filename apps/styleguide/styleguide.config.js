const path = require("path");
//this is a hack to get an imported package resolved route.
const getPackagePath = function (_package, replace = ["/index.js", ""]) {
  return require.resolve(_package).replace("/index.js", "");
};

/* * PatternLab Package Path * */
const gPatternLabPackagePath = path.join(
  getPackagePath("@snailicide/g-patternlab"),
  "src"
);

/* * Shopify Components Package Path * */
const gShopifyOrmPackagePath = path.join(
  getPackagePath("@snailicide/g-shopify-orm"),
  "src"
);

/* * Tailwind Stylesheet Path * */
const gTWCSSPath = path.join(
  getPackagePath("@snailicide/g-tailwind"),
  "dist/css/app.css"
);

module.exports = {
  // set your styleguidist configuration here
  title: "Snail Style Guide",
  require: [gTWCSSPath],
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  sections: [
    {
      name: "UI Components",
      sections: [
        {
          name: "SFC",
          components: `${gPatternLabPackagePath}/components/ui/sfc/*.vue`,
        },
        {
          name: "Styled Components",
          components: `${gPatternLabPackagePath}/components/ui/styled/docs/*.vue`,
        },
      ],
    },
    {
      name: "Shopify Components",
      sections: [
        {
          name: "Product Provider",
          components: `${gShopifyOrmPackagePath}/components/dataProvider/ProductProvider.vue`,
        },
      ],
    },
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },
};
