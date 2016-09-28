
import { 	createStore 	,
			applyMiddleware ,
			compose 		} 	from 'redux';
import 		reducers 			from '../reducers/index.jsx';
import 		thunk 				from 'redux-thunk';
import 		logger 				from 'redux-logger';
import * as actionReddit 		from '../actions/reddit.jsx';
import * as actionTimer 		from '../actions/timer.jsx';

export let isMonitorAction;

export default function ( state ) {

	const store = createStore (
		reducers 	,
		state 		,
		compose (
		applyMiddleware (
			thunk 	,
			logger ()
		) ,
		window.devToolsExtension ? window.devToolsExtension ({
			getMonitor : ( monitor ) => {
				isMonitorAction = monitor.isMonitorAction;
			} ,
			actionTimer ,
			actionReddit
		}) : f => f
	));

	return store;
};
