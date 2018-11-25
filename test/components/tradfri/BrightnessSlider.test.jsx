const React = require('react')
const BrightnessSlider = require('../../../src/components/tradfri/BrightnessSlider')

const {shallow} = require('enzyme')

describe('BrightnessSlider', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<BrightnessSlider brightness={1} />)
		expect(wrapper).toMatchSnapshot()
	})
})
