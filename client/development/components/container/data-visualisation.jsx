
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import * as d3 					from 'd3';
import actions					from 'actions/boards';
import 							'stylesheets/components/container/data-visualisation';

class DataVisualisation extends Component {

	constructor () {

		super ();
	}
	
	componentDidMount () {

		let { dispatch 	} = this.props;

		dispatch ( actions.get ());
	}

	componentDidUpdate () {
		
		console.log ( this)
		
		d3.select ( 'svg' ).append("g")
			.attr("class", "nodes")
			.selectAll("circle")
			.data(this.props.boards)
			.enter().append("circle")
			.attr("r", 5)
			.attr("fill", 'red')
			// .call(d3.drag()
			// .on("start", dragstarted)
			// .on("drag", dragged)
			// .on("end", dragended));
	}

	render () {

		//let timestamps 	= this.props.timer.timestamps;

		return (
			<svg 
				className 	= { 'data-visualisation' + ( this.props.boards.loading ? ' data-visualisation--loading' : '' )}
				height 		= { window.innerHeight 	}
				ref 		= 'canvas'
				width 		= { window.innerWidth 	}
			>
			</svg>
		);
	}
};

export default connect (

	state => ({
		boards : state.boards
	})

) ( DataVisualisation );
