
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import * as d3 					from 'd3';
import actions					from 'actions/boards';
import 							'./data-visualisation.css';

class DataVisualisation extends Component {

	constructor () {

		super ();
		console.log ( 'Y no d3?', d3 );	
	}
	
	componentDidMount () {

		let { dispatch 	} = this.props;

		dispatch ( actions.get ());
	}

	render () {

		//let timestamps 	= this.props.timer.timestamps;

		return (
			<canvas 
				className = { 'data-visualisation ' + ( this.props.boards.loading ? 'data-visualisation--loading' : '' )}
			>
			</canvas>
		);
	}
};

export default connect (

	state => ({
		boards : state.boards
	})

) ( DataVisualisation );
