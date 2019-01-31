'use strict'

import React from 'react'
import {Title} from 'src/components/Tradfri/Light/Title'

import {shallow} from 'enzyme'

describe('Title', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Title deviceId={1} title='test' />)
		expect(wrapper).toMatchSnapshot()
	})
})
