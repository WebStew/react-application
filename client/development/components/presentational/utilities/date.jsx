
import React , 	{ Component } 	from 'react';

export default class Date extends Component {

	render () {	

		return (
			<time 
				className 	= { 'datetime' + ( this.props.className ? ' this.props.className' : '' )}
				dateTime 	= { this.props.time 													}
			>
				{ this.props.label 	}
				{ this.props.time 	}
			</time>
		);
	}
};