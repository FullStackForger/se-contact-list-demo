import ContactListItem from './ContactListItem';

export default({ contacts })  => {
	return (
		<div>
			{contacts.map(contact => (
				<ContactListItem {...contact} key={contact.id} />
			))}
		</div>
	)
};