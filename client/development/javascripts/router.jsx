

import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import          { Provider  }   from 'react-redux';
import 			{
					Router 			,
					Route 			,
					IndexRoute 		,
					browserHistory
				} 				from 'react-router';
import MainView 				from './screens/main.jsx';
import HomeView 				from './screens/home.jsx';
import SectionView 				from './screens/section.jsx';
import SubSectionView 			from './screens/sub-section.jsx';
import setStore 				from './stores/application.jsx';

const store = setStore ();

render (

	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MainView}>
				<IndexRoute 				component={HomeView}		/>
				<Route path='/section' 		component={SectionView}		/>
				<Route path='/section/:id' 	component={SubSectionView} 	/>
			</Route>
		</Router>
	</Provider> ,
	document.getElementById ( 'view-application' )
);
