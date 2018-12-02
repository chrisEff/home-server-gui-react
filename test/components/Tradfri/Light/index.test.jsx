'use strict'

const React = require('react')
const Light = require('../../../../src/components/Tradfri/Light')

const {shallow} = require('enzyme')

describe('Light', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Light bulb={{
			brightness: 254,
			bulbType: 'white-spectrum',
			color: 'neutraål',
			firmware: '1.2.217',
			id: 65537,
			model: 'TRADFRI bulb E27 WS opal 980lm',
			name: 'Decke',
			state: 0,
			type: 'bulb',
		}} />)
		expect(wrapper).toMatchSnapshot()
	})
})
