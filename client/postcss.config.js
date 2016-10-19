
var Extractor = require ( 'extract-text-webpack-plugin' );

module.exports = [
	require ( 'autoprefixer' 		) ,
	require ( 'postcss-initial' 	) ({
		reset 	: 'inherited'
	}) ,
	require ( 'postcss-import' 		) ,
	require ( 'postcss-mixins' 		) ({
		mixins 	: require ( './development/stylesheets/configuration/mixins' 		)
	}) ,
	require ( 'postcss-nested' 		) ,
	require ( 'postcss-simple-vars' ) ({
		variables 	: function () {

			return require ( './development/stylesheets/configuration/variables' 	);
		} ,
		unknown 	: function (
			node ,
			name ,
			result
		) {
			node.warn (
				result ,
				'Unknown variable ' + name
			);
		}
	}) ,
	require ( 'postcss-math' 			) ,
	require ( 'postcss-color-function' 	) ,
	new Extractor ( 'style.css' , {
		allChunks : false
	})

];
