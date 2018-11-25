const React = require('react')
const Shutter = require('../../../src/components/shutters/Shutter')

const {shallow} = require('enzyme')

describe('Shutter', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Shutter shutter={{
			id: 1,
			name: 'Office',
			codeDown: 12345678,
			codeUp: 87654321,
			protocol: 4,
		}} />)
		expect(wrapper).toMatchSnapshot()
	})
})
