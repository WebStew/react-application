
import action 	from 'actions/browser';
import debounce from 'lodash.debounce';

export default {
	
	on : function ( store ) {

		const setDimensions = debounce ( function () {

			store.dispatch ( action.resize ({
				height 	: window.innerHeight ,
				width 	: window.innerWidth
			}))} ,
			100
		);

		if ( this.window ) {

			window.addEventListener ( 'resize', setDimensions );
		}
	} ,

	window : typeof window !== 'undefined'

}