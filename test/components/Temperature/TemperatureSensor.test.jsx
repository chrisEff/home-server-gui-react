'use strict'

const React = require('react')
const TemperatureSensor = require('../../../src/components/Temperature/TemperatureSensor')

const {shallow} = require('enzyme')

describe('TemperatureSensor', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<TemperatureSensor name='Office' value={23.187} />)
		expect(wrapper).toMatchSnapshot()
	})
})