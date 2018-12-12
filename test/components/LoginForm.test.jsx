'use strict'

import React from 'react'
import LoginForm from '../../src/components/LoginForm'

import {shallow} from 'enzyme'

describe('LoginForm', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<LoginForm />)
		expect(wrapper).toMatchSnapshot()
	})
})
