'use strict'

import React from 'react'
import BrightnessSlider from '../../../../src/components/Tradfri/Light/BrightnessSlider'

import {shallow} from 'enzyme'

describe('BrightnessSlider', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<BrightnessSlider brightness={1} />)
		expect(wrapper).toMatchSnapshot()
	})
})
