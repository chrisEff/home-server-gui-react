'use strict'

import React from 'react'
import Shutter from '../../../src/components/Shutters/Shutter'

import {shallow} from 'enzyme'

describe('Shutter', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Shutter shutter={{
			id: 1,
			name: 'Office',
			codeDown: 12345678,
			codeUp: 87654321,
			protocol: 4,
		}} />)
		expect(wrapper).toMatchSnapshot()
	})
})
