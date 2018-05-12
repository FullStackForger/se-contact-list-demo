const contacts = [
	{id: "c1", firstName: "John", lastName: "Doe", phoneNumbers: []},
	{id: "c2", firstName: "Tom", lastName: "Black", phoneNumbers: []},
	{id: "c3", firstName: "Tom", lastName: "Brown", phoneNumbers: []},
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