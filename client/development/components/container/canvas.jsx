
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import * as d3 					from 'd3';
//import Button 					from 'components/presentational/button';
//import List 					from 'components/presentational/list';
//import ListItem 				from 'components/presentational/list-item';
//import actions					from 'actions/timer';

class Canvas extends Component {

	constructor () {

		super ();
		console.log ( 'Y no d3?', d3 );
		
	}

	render () {

		//let timestamps 	= this.props.timer.timestamps;

		return (
			<canvas { ...this.props }></canvas>
		);
	}
};

export default Canvas;
// export default connect (

// 	state => ({
// 		timer : state.timer
// 	})
// ) ( LapTimes );
