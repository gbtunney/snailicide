const path = require("path");
const fs = require("fs");

const gPatternlab = require('@snailicide/g-patternlab')

//path.dirname(require.resolve("@snailicide/g-patternlab/package.json"));

let packagePath =require.resolve('@snailicide/g-patternlab').replace('/index.js', '')

const newpathh = path.join(packagePath,"src/components")
console.log(packagePath);

//console.log("Patternlab!" ,gPatternlab,packagePath)
//path.join(,gPatternlab  )


fs.access(newpathh, fs.F_OK, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("pathh excistsç")
    //file exists
})
