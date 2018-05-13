import React from 'react';
import ContactListItem from './ContactListItem';
import RemovableListItem from './RemovableListItem';
import './ContactDetails.scss';

export default class PhoneNumbers extends React.Component {

	renderPhoneNumberList(phoneNumbers) {
		const phoneList = phoneNumbers.map(phone => (
			<RemovableListItem key={phone}>{phone}</RemovableListItem>
		));

		return (
			<ul className="phone-numbers">
				{phoneList}
			</ul>
		);
	}

	render() {
		const {id, phoneNumbers} = this.props;

		let phoneNumberList = null;
		if (phoneNumbers.length > 0) {
			phoneNumberList = this.renderPhoneNumberList(phoneNumbers)
		}

		return (
			<div className="card contact-details" key={id}>
				<ContactListItem {...this.props}/>
				{phoneNumberList}
			</div>
		);
	}
};