
import constants 	from 'constants/browser';
import browser 		from 'utilities/browser';

 export default function ( state = {
		dimensions 	: {
			height 	: browser.window ? window.innerHeight 	: null ,
			width 	: browser.window ? window.innerWidth 	: null
		}
	} , action ) {

	switch ( action.type ) {

		case constants.resize :

			return Object.assign (
				{} 		,
				state 	,
				{
					dimensions : action.dimensions
				}
			);

		break;

		default :
			return state;
	}
};
