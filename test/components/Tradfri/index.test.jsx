'use strict'

import React from 'react'
import {Tradfri} from '@/components/Tradfri'

import {shallow} from 'enzyme'

describe('Tradfri', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Tradfri title='test' tradfriGroups={[{
			id: 131092,
			name: 'Office',
			deviceIds: [65603, 65537, 65602],
		}]} />)
		expect(wrapper).toMatchSnapshot()
	})
})
