
import React , 	{ Component } 	from 'react';

import 			{ Link 		} from 'react-router';

export default class BoardItem extends Component {

	render () {

		let board = this.props.board

		return (
			<li>
				<h2 className = 'boards-overview__title'>
					<Link
						className 	= 'boards-overview__title'
						to 			= { 'boards/' + board.id }>
						{ board.name }
					</Link>
				</h2>
				<dl>
					<dt>Role</dt>
					<dd>{ board.role }</dd>
					<dt>Theme</dt>
					<dd>{ board.theme }</dd>
					<dt>Created</dt>
					<dd>{ board.created }</dd>
					<dt>Modified</dt>
					<dd>{ board.modified }</dd>
					{/*<dt>Public</dt>
					<dd>{ board.public }</dd>
					<dt>Archived</dt>
					<dd>{ board.archived }</dd>
					<dt>Favourite</dt>
					<dd>{ board.favourite }</dd>*/}
				</dl>
			</li>
		);
	}
};