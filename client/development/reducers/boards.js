
import constants from 'constants/boards';

 export default function ( state = {
 		date 	: Date.now () 	,
 		loading : false 		,
 		models 	: [] 			,
 	} , action ) {

	switch ( action.type ) {

		case constants.error :

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : false ,
					value 	: action.value
				}
			);
		break;

		case constants.receive :

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : false 		,
					models 	: action.boards ,
					value 	: action.value
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

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				{
					value : action.value
				}
			);
		break;

		default :
			return state;
	}
};
