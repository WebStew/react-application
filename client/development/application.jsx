
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
import MainView 				from 	'screens/main';
import HomeView 				from 	'screens/home';
import SectionView 				from 	'screens/section';
import SubSectionView 			from 	'screens/sub-section';
import setStore 				from 	'stores/application';
import 									'stylesheets/application';

const store = setStore ();

render (

	<Provider 	store 	= { store }>
		<Router history = { browserHistory }>
			<Route
				path 		= '/'
				component 	= { MainView }>

				<IndexRoute
					component 	= { HomeView }
				/>
				<Route
					path 		= '/section'
					component 	= { SectionView }
				/>
				<Route
					path 		= '/section/:id'
					component 	= { SubSectionView 	}
				/>

			</Route>
		</Router>
	</Provider> ,
	document.getElementById ( 'view-application' )
);
