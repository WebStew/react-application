
import React , 	{ Component } 	from 'react';
import Loader 					from 'components/presentational/utilities/loader-signal';
import BoardOverview 				from 'components/presentational/boards/overview';

export default class BoardListOverView extends Component {

	render () {

		let boards = [];

		this.props.boards.forEach ( function ( board , index ) {
			
			boards.push ( 
				<BoardOverview 
					board 	= { board 					} 
					key 	= { 'board__item--' + index }
				/>
			);
		});

		return (
			<div className = 'boards-overview loader'>
				<Loader
					loading = { this.props.loading }
				/>
				<ul 
					className 	= { 'boards-overview__list loader__body' + ( this.props.loading ? ' loader__body--loading' : '' )}>
					{ boards }
				</ul>
			</div>
		);
	}
};