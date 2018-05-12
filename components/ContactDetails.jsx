import ContactListItem from './ContactListItem';

export default (contact) => (
	<div className="card contact-details" key={contact.id}>
		<ContactListItem {...contact}/>
	</div>
);