
import 									'babel-polyfill';
import React , 	{ Component } 	from 	'react';
import 			{ render 	} 	from 	'react-dom';
import          { Provider  }   from 	'react-redux';
import 			{
					Router 			,
					Route 			,
					IndexRoute 		,
					browserHistory
				} 				from 	'react-router';
import { syncHistoryWithStore } from 	'react-router-redux'
import MainView 				from 	'screens/main';
import HomeScreen 				from 	'screens/home';
import BoardsScreen 			from 	'screens/boards';
import BoardsDetailScreen 		from 	'screens/boards-detail';
import setStore 				from 	'stores/application';
import setPageTitle 			from 	'components/presentational/page-title';
import 									'stylesheets/application';

const store 	= setStore ();
const history 	= syncHistoryWithStore ( browserHistory , store );

render (

	<Provider 	store 	= { store }>
		<Router history = { history } onUpdate = { setPageTitle }>
			<Route
				path 		= '/'
				component 	= { MainView }
			>
				<IndexRoute
					component 	= { HomeScreen }
					title 		= 'Home'
				/>
				<Route
					path 		= '/boards'
					component 	= { BoardsScreen }
					title 		= 'Your Boards'
				/>
				<Route
					path 		= '/boards/:id'
					component 	= { BoardsDetailScreen }
					title 		= 'Board Detail'
				/>
			</Route>
		</Router>
	</Provider> ,
	document.getElementById ( 'view-application' )
);
