'use strict'

import React from 'react'
import { Switch } from '@/components/Tradfri/Light/Switch'

import { shallow } from 'enzyme'

describe('Switch', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Switch deviceId={1} state={1} />)
		expect(wrapper).toMatchSnapshot()
	})
})
