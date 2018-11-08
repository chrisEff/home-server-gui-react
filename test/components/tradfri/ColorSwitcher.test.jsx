const React = require('react')
const ColorSwitcher = require('../../../src/components/tradfri/ColorSwitcher')

const { shallow } = require('enzyme')

describe('ColorSwitcher', () => {

	it('should render the rgb switcher correctly', () => {
		const wrapper = shallow(<ColorSwitcher bulbType="rgb" color="red" />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should render the white-spectrum switcher correctly', () => {
		const wrapper = shallow(<ColorSwitcher bulbType="white-spectrum" color="warm" />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should render the white switcher correctly', () => {
		const wrapper = shallow(<ColorSwitcher bulbType="white" color="neutral" />)
		expect(wrapper).toMatchSnapshot()
	})

})
