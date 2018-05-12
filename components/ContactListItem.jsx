import './ContactListItem.scss';

export default ({id, firstName, lastName}) => (
	<div className="level is-ancestor contact-list-item" key={id}>
		<div className="contact-list-item--info">
			<span>{firstName}</span>&nbsp;
			<span>{lastName}</span>
		</div>
		<div className="contact-list-item--controls">
			<a className="button is-small is-danger">
				<span className="delete is-small"/>Delete
			</a>
		</div>
	</div>
);