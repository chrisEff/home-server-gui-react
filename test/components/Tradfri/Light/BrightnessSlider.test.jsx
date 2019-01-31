'use strict'

import React from 'react'
import {BrightnessSlider} from '@/components/Tradfri/Light/BrightnessSlider'

import {shallow} from 'enzyme'

describe('BrightnessSlider', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<BrightnessSlider deviceId={1} brightness={1} />)
		expect(wrapper).toMatchSnapshot()
	})
})
