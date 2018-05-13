import React from 'react';
import Link from 'next/link';

export default class EditableItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {id, firstName, lastName} = this.props;
		return (
			<div className="level is-ancestor contact-list-item">
				<div className="contact-list-item--info">
					<Link href={{pathname: '/contact', query: {id}}}>
						<span>{firstName}&nbsp;{lastName}</span>
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