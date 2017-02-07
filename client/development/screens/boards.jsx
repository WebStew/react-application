
import React , 	{ Component } 	from 'react';
import 			{ Link 		} 	from 'react-router';
import 			{ connect 	} 	from 'react-redux';
import actions					from 'actions/boards';
import BoardsList 				from 'components/presentational/boards/list';
import  						'stylesheets/components/boards/overview';

export default connect (

	state => ({
		boards : state.boards
	})

) ( class BoardsScreen extends Component {

	componentDidMount () {
		
		if ( ! this.props.boards.models.length ) {

			let { dispatch 	} = this.props;
			dispatch ( actions.get ());
		}
	}

	/**
	 * Renders the React section controller view and any components.
	 * @return {Object} Div element.
	 */
	render () {

		return (
			<section>
				<h1>Your Boards</h1>
				<BoardsList 
					boards 	= { this.props.boards.models 	} 
					loading = { this.props.boards.loading 	}
				/>
			</section>
		);
	}

});
