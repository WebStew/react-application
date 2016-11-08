
var extractor 	= require ( 'extract-text-webpack-plugin' );

module.exports 	= {
	test 	: /\.css$/ ,
	loader 	: extractor.extract (
		'style-loader' ,
		'css-loader?sourceMap!postcss-loader'
	)
};
