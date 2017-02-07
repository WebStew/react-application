
import React , 	{ Component } 	from 'react';
import 			{ connect 	} 	from 'react-redux';
import actions					from 'actions/board';
import BoardDetails 			from 'components/presentational/boards/detail';

export default connect (

	state => ({
		board : state.board
	})

) ( class BoardsDetailScreen extends Component {

	componentDidMount () {

		let { dispatch 	} = this.props;

		dispatch ( actions.get ( this.props.params.id ));
	}

	/**
	 * Renders the React section controller view and any components.
	 * @return {Object} Div element.
	 */
	render () {

		return (
			<section>
				<h1>{ this.props.board.model.name || 'Board Details' }</h1>
				<BoardDetails 
					board 	= { this.props.board.model 		} 
					loading = { this.props.board.loading 	}
				/>
			</section>
		);
	}

});
