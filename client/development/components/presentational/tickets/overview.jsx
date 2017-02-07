
import React , 	{ Component } 	from 'react';
import Button 					from 'components/presentational/button';

export default class TicketOverview extends Component {

	constructor ( props ) {

		super ( props )

		this.getTicket = this.getTicket.bind ( this );
	}

	getTicket ( e ) {
		console.log ( 'click' , this )
	}

	render () {

		let ticket = this.props.ticket;

		return (
			<div className = { 'ticket__status ticket_status--' + ticket.status }>
				<h4>
					<Button 
						className 	= 'button button--link'
						type 		= 'button'
						value 		= { ticket.name 	}
						onClick 	= { this.getTicket 	}
					/>
				</h4>
				<p>{ ticket.status }</p>
				<p>{ ticket.soundbite }</p>
			</div>
		);
	}
};