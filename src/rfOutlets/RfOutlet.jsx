const config = require('../../config')

const React = require('react')

class RfOutlet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {outlet: props.outlet}
	}


	render() {
		const className = this.state.outlet.state ? 'outlet on' : 'outlet'
		return (
			<div className={className} onClick={this.handleClick}>
				{this.state.outlet.name}
				<div className='plug'>🔌</div>
			</div>
		)
	}

	handleClick = async () => {
		const outlet = this.state.outlet
		await fetch(
			`${config.api.protocol}://${config.api.host}:${config.api.port}/rfoutlets/outlet/${outlet.id}/${outlet.state ? 0 : 1}?key=${config.api.key}`,
			{method: 'PUT'}
		)

		outlet.state = outlet.state ? 0 : 1
		this.setState({outlet})
	}
}

module.exports = RfOutlet
