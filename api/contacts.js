const contacts = [
	{id: "c1", firstName: "John", lastName: "Doe", phoneNumbers: ['1231-123-123', '1233-123-123']},
	{id: "c2", firstName: "Tom", lastName: "Black", phoneNumbers: []},
	{id: "c3", firstName: "Tom", lastName: "Brown", phoneNumbers: ['123123-00999-999']},
];

export function getContacts () {
	return new Promise((resolve, reject) => {
		resolve(Object.assign(contacts));
	});

}

export function getContact (id) {
	return new Promise((resolve, reject) => {

		contacts.forEach(contact => {
			if (contact.id == id) {
				resolve(contact);
			}
		});

		reject(`Contact ${id} not found`);
	});
}