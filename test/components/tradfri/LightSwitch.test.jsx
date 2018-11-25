const React = require('react')
const LightSwitch = require('../../../src/components/tradfri/LightSwitch')

const {shallow} = require('enzyme')

describe('LightSwitch', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<LightSwitch state={1} />)
		expect(wrapper).toMatchSnapshot()
	})
})
