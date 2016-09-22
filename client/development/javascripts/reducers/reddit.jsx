
import constants from '../constants/reddit.jsx';

let _reddits = {};

 export default function ( state = {} , action ) {

	switch ( action.type ) {

		case constants.select :

			return Object.assign (
				{} 		,
				state 	,
				{
					off : true 	,
					on 	: false
      			}
      		);
		break;

		default :
			return state;
	}
};


