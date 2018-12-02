'use strict'

const React = require('react')
const Switch = require('../../../../src/components/Tradfri/Light/Switch')

const {shallow} = require('enzyme')

describe('Switch', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Switch state={1} />)
		expect(wrapper).toMatchSnapshot()
	})
})
