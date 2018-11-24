const React = require('react')
const ColorSwitcher = require('../../../src/components/tradfri/ColorSwitcher')

const { shallow } = require('enzyme')

describe.only('ColorSwitcher', () => {

	it.each([
		['red'],
		['green'],
		['blue'],
		['yellow'],
		['pink'],
		['purple'],
		['warm'],
		['neutral'],
		['cold'],
	])('should render the rgb switcher correctly when %s is active', (color) => {
		const wrapper = shallow(<ColorSwitcher bulbType="rgb" color={color} />)
		expect(wrapper).toMatchSnapshot()
	})

	it.each([
		['warm'],
		['neutral'],
		['cold'],
	])('should render the white-spectrum switcher correctly when %s is active', (color) => {
		const wrapper = shallow(<ColorSwitcher bulbType="white-spectrum" color={color} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should render the white switcher correctly', () => {
		const wrapper = shallow(<ColorSwitcher bulbType="white" color="neutral" />)
		expect(wrapper).toMatchSnapshot()
	})

})
