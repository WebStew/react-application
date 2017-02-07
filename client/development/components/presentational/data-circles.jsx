
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import Circle 					from 'components/presentational/circle';

export default class DataCircles extends Component {

	render () {

		let items = [];

		this.props.items.forEach ( function ( item , index ) {

			items.push (
				<Circle key = { index }
				/>
			);

		});

		return (
			<g>
				{ items }
			</g>
		);
	}
};