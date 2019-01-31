'use strict'

import React from 'react'
import {LightGroup} from 'src/components/Tradfri/LightGroup'

import {shallow} from 'enzyme'

describe('LightGroup', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<LightGroup id={1} name='Test Group' devices={[{
			brightness: 254,
			bulbType: 'white-spectrum',
			color: 'neutraål',
			firmware: '1.2.217',
			id: 65537,
			model: 'TRADFRI bulb E27 WS opal 980lm',
			name: 'Decke',
			state: 0,
			type: 'bulb',
		}]} />)
		expect(wrapper).toMatchSnapshot()
	})
})
