const React = require('react')
const LightTitle = require('../../../src/components/tradfri/LightTitle')

const {shallow} = require('enzyme')

describe('LightTitle', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<LightTitle title='test' />)
		expect(wrapper).toMatchSnapshot()
	})
})
