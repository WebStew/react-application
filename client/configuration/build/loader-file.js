
module.exports = {
	test 	: /\.(jpe?g|png|gif|svg)$/i ,
	loader 	: [
		{
			loader : 'file?hash=sha512&digest=hex&name=[hash].[ext]'
		} ,
		{
			loader : 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		}
	]
};
