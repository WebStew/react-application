
import { combineReducers 	} 	from 'redux';
import { routerReducer 		} 	from 'react-router-redux'

import board 					from 'reducers/board';
import boards 					from 'reducers/boards';
import browser 					from 'reducers/browser';
import ticket 					from 'reducers/ticket';

export default combineReducers ({
	board 	,
	boards 	,
	browser ,
	ticket 	,
	routing : routerReducer
});
