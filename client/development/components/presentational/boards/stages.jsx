
import React , 	{ Component } 	from 'react';
import Stage 					from 'components/presentational/boards/stage';

export default class Stages extends Component {

	render () {

		let stages = [];

		if ( ! this.props.stages ) {
			return null;
		}

		this.props.stages.forEach ( function ( stage , index ) {
			
			stages.push ( 
				<Stage
					stage 	= { stage 					} 
					key 	= { 'stage__item--' + index }
				/>
			);
		});

		return (
			<div>
				{ stages }
			</div>
		);
	}
};