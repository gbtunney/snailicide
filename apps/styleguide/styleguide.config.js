const path = require("path");
let packagePath =require.resolve('@snailicide/g-patternlab').replace('/index.js', '')
const gPatternLabPath = path.join(packagePath,"src")

module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	 sections: [
	 {
	    name: 'First Section',
	    components: 'src/components/**/[A-Z]*.vue'
	  },
		 {
			 name: 'Secojd Section',
			 components: `${gPatternLabPath}/AppButton.vue`
		 },
		 {
			 name: 'UI',
			 components: `${gPatternLabPath}/components/ui/sfc/*.vue`
		 }
	 ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand',
	require: [
		path.join(gPatternLabPath ,'/main.styleguide.js')
	]
}
