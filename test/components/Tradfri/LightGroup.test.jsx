'use strict'

import React from 'react'
import { LightGroup } from '@/components/Tradfri/LightGroup'

import { shallow } from 'enzyme'

describe('LightGroup', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<LightGroup
				id={1}
				name="Test Group"
				devices={[
					{
						brightness: 254,
						bulbType: 'white-spectrum',
						colors: 'neutral',
						firmware: '1.2.217',
						id: 65537,
						model: 'TRADFRI bulb E27 WS opal 980lm',
						name: 'Decke',
						state: 0,
						type: 'bulb',
					},
				]}
			/>,
		)
		expect(wrapper).toMatchSnapshot()
	})

	it('should go into edit mode on click', () => {
		const wrapper = shallow(
			<LightGroup
				id={1}
				name="Test Group"
				devices={[
					{
						brightness: 254,
						bulbType: 'white-spectrum',
						colors: 'neutral',
						firmware: '1.2.217',
						id: 65537,
						model: 'TRADFRI bulb E27 WS opal 980lm',
						name: 'Decke',
						state: 0,
						type: 'bulb',
					},
				]}
			/>,
		)
		wrapper.find('h3').simulate('click')
		expect(wrapper).toMatchSnapshot()
	})
})
