'use strict'

const React = require('react')
const RfOutlet = require('../../../src/components/RfOutlets/RfOutlet')

const {shallow} = require('enzyme')

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
