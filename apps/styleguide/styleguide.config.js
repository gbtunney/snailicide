const path = require("path");

const package = require('@snailicide/g-patternlab')
//path.resolve(__dirname, 'src/library'),

module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	sections: [

		{
			name: 'Styled Components',
			components: '@snailicide/g-patternlab/src/components/ui/styled-components/styledElement.js'
		},
		{
			name: 'UI Section',
			components: 'src/library/components/ui/gSVG.vue'
		},

		{
			name: 'Tailwind',
			components: 'src/library/components/ui/gTWSwatches.vue'
		}
	],
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand'
}
