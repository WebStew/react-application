
import React , 	{ Component } 	from 'react';
import strings 					from 'properties/strings';

export default class LoaderSignal extends Component {

	render () {

		return ! this.props.loading ? null : (
			<p className = 'loader__signal'>
				<span className = 'is__accessible'>{ strings.content.loading }</span>
			</p>
		);
	}
};