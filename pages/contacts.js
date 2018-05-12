import ContactList from '../components/ContactList';
import {getContacts} from "../api/contacts";
import {Component} from "react";


export default class Contacts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			contacts: null,
			error: null
		};
	}

	componentDidMount() {
		getContacts()
			.then(contacts => this.setState({contacts}))
			.catch(error => this.setState({error}));
	}

	render() {
		if (this.state.contacts == null) {
			return null;
		}

		return (<div>
				<h1>Contact list app</h1>
				<ContactList contacts={this.state.contacts}/>
			</div>
		)
	}
}
