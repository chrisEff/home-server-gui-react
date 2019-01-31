'use strict'

import React from 'react'
import ErrorMessage from '@/components/ErrorMessage'

import {shallow} from 'enzyme'

describe('ErrorMessage', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<ErrorMessage message='test' />)
		expect(wrapper).toMatchSnapshot()
	})
})
