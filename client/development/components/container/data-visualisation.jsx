
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import actions					from 'actions/boards';
import ForceGraph 				from 'components/presentational/force-graph';
import 							'stylesheets/components/container/data-visualisation';

export default connect (

	state => ({
		boards 		: state.boards ,
		dimensions 	: state.browser.dimensions
	})

) ( class DataVisualisation extends Component {
	
	componentDidMount () {

		let { dispatch 	} = this.props;

		dispatch ( actions.get ());
	}

	render () {

		let dimensions = this.props.dimensions;

		return (
			<ForceGraph
				className 	= { 'data-visualisation' + ( this.props.boards.loading ? ' data-visualisation--loading' : '' )}
				height 		= { dimensions.height 			}
				nodes 		= { this.props.boards.models 	}
				width 		= { dimensions.width 			}
			/>
		);
	}
});
