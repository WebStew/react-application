
import { 	createStore 	,
			applyMiddleware ,
			compose 		} 	from 'redux';
import 		reducers 			from '../reducers/index.jsx';
// import 		thunk 				from 'redux-thunk';
// import 		invariant 			from 'redux-immutable-state-invariant';
import * as actionTimers 		from '../actions/timer.jsx';

export let isMonitorAction;

export default function ( state ) {

	const store = createStore (
		reducers 	,
		state 		,
		compose (
		//applyMiddleware ( invariant () , thunk ) ,
		window.devToolsExtension ? window.devToolsExtension ({
			getMonitor : ( monitor ) => {
				isMonitorAction = monitor.isMonitorAction;
			} ,
			actionTimers
		}) : f => f
	));

	return store;
};
