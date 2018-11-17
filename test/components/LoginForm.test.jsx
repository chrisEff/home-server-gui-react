const React = require('react')
const LoginForm = require('../../src/components/LoginForm')

const { shallow } = require('enzyme')

describe('LoginForm', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<LoginForm />)
		expect(wrapper).toMatchSnapshot()
	})
})
