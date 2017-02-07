
import React , 	{ Component } 	from 'react';
import Loader 					from 'components/presentational/utilities/loader-signal';
import Date 					from 'components/presentational/utilities/date';
import Stages 					from 'components/presentational/boards/stages';

export default class BoardDetail extends Component {

	render () {

		return (
			<div className = 'boards-overview loader'>
				<Loader
					loading = { this.props.loading }
				/>
				<div
					className 	= { 'boards-detail loader__body' + ( this.props.loading ? ' loader__body--loading' : '' )}>
					<Date 
						label 	= 'Created : '
						time 	= { this.props.board.created }
					/>
					<Date 
						label 	= 'Modified : '
						time 	= { this.props.board.modified }
					/>

					<Stages 
						stages = { this.props.board.stages }
					/>

				</div>
			</div>
		);
	}
};