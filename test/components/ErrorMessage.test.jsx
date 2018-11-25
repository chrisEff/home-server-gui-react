const React = require('react')
const ErrorMessage = require('../../src/components/ErrorMessage')

const {shallow} = require('enzyme')

describe('ErrorMessage', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<ErrorMessage message='test' />)
		expect(wrapper).toMatchSnapshot()
	})
})
