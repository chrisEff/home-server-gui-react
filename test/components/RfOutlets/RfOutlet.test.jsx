'use strict'

import React from 'react'
import {RfOutlet} from '../../../src/components/RfOutlets/RfOutlet'

import {shallow} from 'enzyme'

describe('RfOutlet', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<RfOutlet outlet={{
			0: 12494204,
			1: 11940012,
			fauxmoPort: 11002,
			id: 1,
			name: 'Fernseher',
			protocol: 4,
			pulseLength: 355,
			state: 0,
		}} />)
		expect(wrapper).toMatchSnapshot()
	})
})
