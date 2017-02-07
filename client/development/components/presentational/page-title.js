
import application from 'configuration/application';

export default function () {

	const 	routes 	= this.state.routes ,
			route 	= routes [ routes.length - 1 ]

	document.title = route.title + ' | ' + application.name;
};
