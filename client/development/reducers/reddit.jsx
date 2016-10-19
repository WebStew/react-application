
import constants from 'constants/reddit';

let _reddits = {};

 export default function ( state = {
 		date 	: Date.now () 	,
 		loading : false 		,
 		reddits : {} 			,
 		value 	: ''
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

			_reddits [ action.value ] = action.reddits;

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : false 			,
					reddits : _reddits,
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


