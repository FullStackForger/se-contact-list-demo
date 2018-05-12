import React from 'react';

import './RemovableListItem.scss';

export default class RemovableListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="level is-ancestor removable-list-item">
				<div className="removable-list-item--info">
					{this.props.children}
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