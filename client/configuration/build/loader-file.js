
module.exports = {
	test : /.*\.(gif|png|jpe?g|svg)$/i,
	loaders : [
		'file-loader' ,
		{
			loader 	: 'image-webpack-loader' ,
			query 	: {
				progressive 		: true 	,
				optimizationLevel 	: 7 	,
				interlaced 			: false ,
				pngquant 			: {
					quality : '65-90' ,
					speed 	: 4
				}
			}
		}
	]
};
