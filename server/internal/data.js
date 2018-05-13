let contacts = [
	{id: "c1", firstName: "John", lastName: "Doe", phoneNumbers: ['1231-123-123', '1233-123-123']},
	{id: "c2", firstName: "Tom", lastName: "Black", phoneNumbers: []},
	{id: "c3", firstName: "Tom", lastName: "Brown", phoneNumbers: ['123123-00999-999']},
];

function getContacts() {
	return contacts;
}

function getContact(id) {
	contacts.forEach((contact) => {
		if (contact.id == id) {
			return contact;
		}
	})
}

function deleteContact(id) {
	let found = false;
	contacts = contacts.filter(contact => {
		if (contact.id == id) {
			found = true;
			return false;
		}
		return true;
	});
	const error = found ? '' : `Contact id: ${id} not found.`;
	return { success: found, error}
}

module.exports = {
	getContacts,
	getContact,
	deleteContact
};