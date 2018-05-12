import ContactList from '../components/ContactList';
import './index.scss';

const contacts = [
	{id: "c1", firstName: "John", lastName: "Doe", phoneNumbers: []},
	{id: "c2", firstName: "Tom", lastName: "Black", phoneNumbers: []},
	{id: "c3", firstName: "Tom", lastName: "Brown", phoneNumbers: []},
];

export default () => (
	<div className="index">
		<h1>Contact list app</h1>
		<ContactList contacts={contacts}/>
	</div>
);