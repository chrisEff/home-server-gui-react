'use strict'

import React from 'react'
import Light from '../../../../src/components/Tradfri/Light'

import {shallow} from 'enzyme'

describe('Light', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Light bulb={{
			brightness: 254,
			bulbType: 'white-spectrum',
			color: 'neutraål',
			firmware: '1.2.217',
			id: 65537,
			model: 'TRADFRI bulb E27 WS opal 980lm',
			name: 'Decke',
			state: 0,
			type: 'bulb',
		}} />)
		expect(wrapper).toMatchSnapshot()
	})
})
