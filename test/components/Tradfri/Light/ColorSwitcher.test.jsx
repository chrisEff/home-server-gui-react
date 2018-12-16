'use strict'

import React from 'react'
import {ColorSwitcher} from '../../../../src/components/Tradfri/Light/ColorSwitcher'

import {shallow} from 'enzyme'

describe.only('ColorSwitcher', () => {

	it.each([
		['red'],
		['green'],
		['blue'],
		['yellow'],
		['pink'],
		['purple'],
		['warm'],
		['neutral'],
		['cold'],
	])('should render the rgb switcher correctly when %s is active', (color) => {
		const wrapper = shallow(<ColorSwitcher deviceId={1} bulbType="rgb" color={color} />)
		expect(wrapper).toMatchSnapshot()
	})

	it.each([
		['warm'],
		['neutral'],
		['cold'],
	])('should render the white-spectrum switcher correctly when %s is active', (color) => {
		const wrapper = shallow(<ColorSwitcher deviceId={1} bulbType="white-spectrum" color={color} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should render the white switcher correctly', () => {
		const wrapper = shallow(<ColorSwitcher deviceId={1} bulbType="white" color="neutral" />)
		expect(wrapper).toMatchSnapshot()
	})

})
