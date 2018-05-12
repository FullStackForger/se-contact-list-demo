import ContactListItem from './ContactListItem';

export default({ contacts })  => {
	return (
		<div className="section">
			{contacts.map(contact => (
				<ContactListItem {...contact} key={contact.id} />
			))}
		</div>
	)
};