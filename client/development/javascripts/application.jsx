

import React , 	{ Component     } 	from 'react';
import 			{ render      } 	from 'react-dom';
import 			{
					Router 			,
					Route 			,
					IndexRoute 		,
					browserHistory
				}                   from 'react-router';
import MainView                     from './controller-views/main.jsx';
import HomeView                     from './controller-views/home.jsx';
import SectionView                  from './controller-views/section.jsx'
import SubSectionView               from './controller-views/sub-section.jsx'

render (
    <Router history={browserHistory}>
		<Route path="/" component={MainView}>
        	<IndexRoute 				component={HomeView}		/>
        	<Route path='/section' 		component={SectionView}		/>
        	<Route path='/section/:id' 	component={SubSectionView} 	/>
        </Route>
    </Router> ,
    document.getElementById ( 'view-application' )
);
