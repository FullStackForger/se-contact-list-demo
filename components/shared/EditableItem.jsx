import React from 'react';

export default class EditableItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="level is-ancestor contact-list-item">
				<div className="contact-list-item--info">
					<Link href={{pathname: '/contact', query: {id: contact.id}}}>
						<span>{contact.firstName}&nbsp;{contact.lastName}</span>
					</Link>
				</div>
				<div className="contact-list-item--controls">
					<a className="button is-small is-danger">
						<span className="delete is-small"/>Delete
					</a>
				</div>
			</div>
		)
	}
}