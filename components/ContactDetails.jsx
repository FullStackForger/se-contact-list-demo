import ContactListItem from './ContactListItem';
import './ContactDetails.scss';

export default (contact) => {

	let phoneNumbers = contact.phoneNumbers.map(phone => (
		<li key={phone}>{phone}</li>
	));

	if (phoneNumbers.length > 0) {
		phoneNumbers = (<ul className="phones">{phoneNumbers}</ul>)
	}

	return (
		<div className="card contact-details" key={contact.id}>
			<ContactListItem {...contact}/>
			{phoneNumbers}
		</div>
	);
}