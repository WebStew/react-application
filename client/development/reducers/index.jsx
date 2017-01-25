
import { combineReducers 	} from 'redux';
import { routerReducer 		} from 'react-router-redux'

//import timer 				from 'reducers/timer';
//import reddit 				from 'reducers/reddit';
import boards 				from 'reducers/boards';

export default combineReducers ({
	boards ,
	routing : routerReducer
});
