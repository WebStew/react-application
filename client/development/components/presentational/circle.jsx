
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';

export default class DataCircle extends Component {


	render () {

		console.log ( this.props )

		return (
			<circle 
				{ ...this.props }
				cx 		= { Math.random () * window.innerWidth 	} 
				cy 		= { Math.random () * window.innerHeight } 
				r 		= '10'
				fill 	= 'red'
			/>
		);
	}
};