const path = require("path");


const gPatternlab = require('@snailicide/g-patternlab')

//import gPatternlab from '@snailicide/g-patternlab'
//const path2 = path.join(__dirname, '../../packages/g-patternlab/src/components')


	//console.log("fffff",path2)

	module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	sections: [

		{
		    name: 'First Section',
		    components: 'src/components/**/[A-Z]*.(vue)'
		},
		{
			name: 'Second Section',
			components: `${path2}/!**!/[A-Z]*.(js|vue)`
		}
	],
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	exampleMode: 'expand',
		// Add the following function to your styleguide.config.js
		validExtends(fullFilePath) {
			return (
				/[\\/]@scoped[\\/]core[\\/]/.test(fullFilePath) ||
				!/[\\/]node_modules[\\/]/.test(fullFilePath)
			)
		}
}
