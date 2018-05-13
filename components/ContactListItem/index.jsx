import {Component} from 'react';
import Link from 'next/link';

import RemovableListItem from '../RemovableListItem';
import './style.scss';

export default class ContactListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {firstName, lastName, id} = this.props;

		return 	(
				<RemovableListItem>
					<Link href={{pathname: '/contact', query: {id}}}>
						<span className="contact-list-item--link">{firstName} {lastName}</span>
					</Link>
				</RemovableListItem>

		)
	}
}

