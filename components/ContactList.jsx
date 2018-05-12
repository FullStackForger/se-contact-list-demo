import ContactListItem from './ContactListItem';

export default({ contacts })  => {
	return (
		<ul className="contact-list">
			{contacts.map(contact => (
				<ContactListItem {...contact} />
			))}
		</ul>
	)
};