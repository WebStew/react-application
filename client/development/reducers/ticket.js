
import constants from 'constants/ticket';

 export default function ( state = {
 		date 	: Date.now () 	,
 		loading : false 		,
		model 	: {}
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
					model 	: action.ticket
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
