'use strict'

const homeServerApi = require('../../homeServerApi')

const React = require('react')
const PropTypes = require('prop-types')

class RfOutlet extends React.Component {

	static propTypes = {
		outlet: PropTypes.object.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {outlet: props.outlet}
	}


	render () {
		const className = this.state.outlet.state ? 'outlet on' : 'outlet'
		return (
			<div className={className} onClick={this.handleClick}>
				<h4>{this.state.outlet.name}</h4>
				<div className='plug'>🔌</div>
			</div>
		)
	}

	handleClick = async () => {
		const outlet = this.state.outlet
		await homeServerApi.put(`/rfoutlets/outlet/${outlet.id}/${outlet.state ? 0 : 1}`)

		outlet.state = outlet.state ? 0 : 1
		this.setState({outlet})
	}
}

module.exports = RfOutlet
