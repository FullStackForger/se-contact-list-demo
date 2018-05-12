import ContactDetails from '../components/ContactDetails';
import {getContact} from '../api/contacts';
import React, {Component} from 'react';
import { withRouter } from 'next/router'

class Details extends Component {

	constructor(props) {
		super(props);

		this.state = {
			contact: null,
			contactId: -1,
			error: null
		};
	}

	componentDidMount() {
		this.state.contactId = this.props.router.query.id || -1;
		getContact(this.state.contactId)
			.then(contact => this.setState({contact}))
			.catch(error => this.setState({error}));
	}

	render() {
		if (this.state.error != null) {
			return "Error: " + this.state.error;
		}

		if (this.state.contact == null) {
			return "missing contact data for id: " + this.state.contactId;
		}
		return (
			<div>
				<h1>Contact details</h1>
				<ContactDetails {...this.state.contact}/>
			</div>
		)
	}
}


export default withRouter(Details);