const path = require("path");


const gPatternlab = require('@snailicide/g-patternlab')
console.log("Patternlab!" ,gPatternlab, path.resolve('@snailicide/g-patternlab'))

	module.exports = {
	// set your styleguidist configuration here
		components: 'src/components/**/*.vue',
	title: 'Default Style Guide',
	sections: [

		{
		    name: 'First Section',
		    components: 'src/components/**/[A-Z]*.(vue)'
		},
		/*{
			name: 'Second Section',
			components: `${path.resolve('@snailicide/g-patternlab')}/src/components/!**!/[A-Z]*.(vue)`
		}*/
	],
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	exampleMode: 'expand',

}
