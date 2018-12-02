const React = require('react')
const LightTitle = require('../../../../src/components/Tradfri/Light/LightTitle')

const {shallow} = require('enzyme')

describe('LightTitle', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<LightTitle title='test' />)
		expect(wrapper).toMatchSnapshot()
	})
})
