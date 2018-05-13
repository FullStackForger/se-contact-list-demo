import * as React from "react";
import { shallow } from "enzyme";

import RemovableListItem from "./RemovableListItem";

describe('EditableItem', () => {
	it('Renders correctly', () => {
		const child = <div id="child"></div>;
		const component = <RemovableListItem>{child}</RemovableListItem>;
		const result = shallow(component).contains(child);
		expect(result).toBeTruthy();
	});
});
