'use strict'

const React = require('react')
const Title = require('../../../../src/components/Tradfri/Light/Title')

const {shallow} = require('enzyme')

describe('Title', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Title title='test' />)
		expect(wrapper).toMatchSnapshot()
	})
})
