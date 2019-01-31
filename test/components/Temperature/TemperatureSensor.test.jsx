'use strict'

import React from 'react'
import {TemperatureSensor} from '../../../src/components/Temperature/TemperatureSensor'

import {shallow} from 'enzyme'

describe('TemperatureSensor', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<TemperatureSensor sensor={{name: 'Office', celsiusValue: 23.187}} />)
		expect(wrapper).toMatchSnapshot()
	})
})
