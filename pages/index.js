import ContactList from '../components/ContactList';

const contacts = [
	{id: "c1", firstName: "John", lastName: "Doe", phoneNumbers: []},
	{id: "c2", firstName: "Tom", lastName: "Black", phoneNumbers: []},
	{id: "c3", firstName: "Tom", lastName: "Brown", phoneNumbers: []},
];

export default () => (
	<div class="container">
		<div class="notification">
			<h1>Contact list app</h1>
			<ContactList contacts={contacts}/>
		</div>
	</div>
);