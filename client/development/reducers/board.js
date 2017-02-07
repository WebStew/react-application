
import constants from 'constants/board';

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
					model 	: action.board
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
