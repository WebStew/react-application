
import React , 	{ Component } 	from 'react';
import TicketOverview 			from 'components/presentational/tickets/overview';

export default class Stage extends Component {

	render () {

		if ( ! this.props.stage ) {
			return null;
		}

		let tickets = [];

		console.log ( 'TICKETS' ,this.props.stage.tickets )

		// Remove condition when empty tickets is empty array and not null
		if ( this.props.stage.tickets ) {
			this.props.stage.tickets.forEach ( function ( ticket , index ) {

				tickets.push (
					<TicketOverview
						ticket 	= { ticket 					} 
						key 	= { 'ticket__item--' + index }
					/>
				);
			});
		}

		return (
			<div>
				<h3>{ this.props.stage.name }</h3>
				{ tickets }
			</div>
		);
	}
};