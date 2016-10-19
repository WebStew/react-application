
import { combineReducers } 	from 'redux';
import timer 				from 'reducers/timer';
import reddit 				from 'reducers/reddit';

export default combineReducers ({
	reddit ,
	timer
});
