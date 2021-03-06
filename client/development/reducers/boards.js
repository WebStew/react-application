
import constants from 'constants/boards';

 export default function ( state = {
 		date 	: Date.now () 	,
 		loading : false 		,
 		models 	: []
 	} , action ) {

	switch ( action.type ) {

		case constants.error :

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : false
				}
			);
		break;

		case constants.receive :

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : false 		,
					models 	: action.boards
				}
			);
		break;

		case constants.request :

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : true
				}
			);
		break;

		default :
			return state;
	}
};
