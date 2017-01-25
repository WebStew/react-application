
import { 	createStore 	,
			applyMiddleware ,
			compose 		} 	from 'redux';
import 		reducers 			from 'reducers/index';
import 		thunk 				from 'redux-thunk';
import 		logger 				from 'redux-logger';

import * as actionBoards 		from 'actions/boards';
import * as actionBrowser 		from 'actions/browser';

import 		browser 			from 'utilities/browser';

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
				} 				,
				actionBoards 	,
				actionBrowser
			}) : f => f
		)
	);

	// Bind any events that are stored in state
	browser.on ( store );

	return store;
};
