const path = require("path");
const glob = require("glob");
const Minimatch = require("minimatch").Minimatch;

let packagePath = require
  .resolve("@snailicide/g-patternlab")
  .replace("/index.js", "");
const gPatternLabPath = path.join(packagePath, "src");
let twpackagePath = require
  .resolve("@snailicide/g-tailwind")
  .replace("/index.js", "");

module.exports = {
  // set your styleguidist configuration here
  title: "Snail Style Guide",
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  sections: [
    {
      name: "UI Components",
      sections: [
        {
          name: "SFC",
          components: `${gPatternLabPath}/components/ui/sfc/*.vue`,
        },
        {
          name: "Styled Components",
          components: `${gPatternLabPath}/components/ui/styled/docs/*.vue`,
        },
      ],
    },
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },

  require: [path.join(twpackagePath, "dist/css/app.css")],
};
