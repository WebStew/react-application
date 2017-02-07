
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import DataCircles 				from 'components/presentational/data-circles';

import * as d3 					from 'd3';

export default class ForceGraph extends Component {

	render () {

		return (
			<svg 
				className 	= { this.props.className 	}
				height 		= { this.props.height 		}
				ref 		= 'svg'
				width 		= { this.props.width 		}
			>
				<DataCircles items = { this.props.nodes } />
			</svg>
		);
	}
};
