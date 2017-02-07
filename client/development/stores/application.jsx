
import { 	createStore 	,
			applyMiddleware ,
			compose 		} 	from 'redux';
import 		reducers 			from 'reducers/index';
import 		thunk 				from 'redux-thunk';
import 		logger 				from 'redux-logger';

import 		browser 			from 'utilities/browser';

export default function ( state ) {

	let enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore (
		reducers 	,
		state 		,
		enhancers (
			applyMiddleware (
				thunk 	,
				logger ()
			)
		)
	);

	// Bind any events that are stored in state
	browser.on ( store );

	return store;
};
