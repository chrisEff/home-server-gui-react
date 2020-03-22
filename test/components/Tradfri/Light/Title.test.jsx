'use strict'

import React from 'react'
import { Title } from '@/components/Tradfri/Light/Title'

import { shallow } from 'enzyme'

describe('Title', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Title deviceId={1} title='test' />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should go into edit mode on click', () => {
		const wrapper = shallow(<Title deviceId={1} title='test' />)
		wrapper.find('span').simulate('click')
		expect(wrapper).toMatchSnapshot()
	})
})
