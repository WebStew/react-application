
module.exports = function ( webpack ) {

	return [
		require ( 'postcss-import' 				) ({ 
			addDependencyTo : webpack 
		}) 												,
		require ( 'postcss-url' 				) ()	,
		require ( 'postcss-cssnext'				) 		,
		require ( 'postcss-browser-reporter' 	) () 	,
		require ( 'postcss-reporter' 			) ()
	];
};
