
var webpack 	= require ( 'webpack' );

module.exports 	= new webpack.LoaderOptionsPlugin({
	options 	: {
		postcss : [
			require ( 'postcss-import' 				) () ,
			require ( 'postcss-url' 				) () ,
			require ( 'postcss-cssnext'				) ,
			require ( 'postcss-browser-reporter' 	) () ,
			require ( 'postcss-reporter' 			) ()
		]
	}
});
