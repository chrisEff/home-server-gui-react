'use strict'

const config = require('../../config')
const RfOutlet = require('./RfOutlet')
const ErrorMessage = require('../ErrorMessage')

class RfOutlets extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			outlets: [],
			errorMsg: null
		}
	}

	async componentDidMount() {
		try {
			const response = await fetch(`${config.api.protocol}://${config.api.host}:${config.api.port}/rfoutlets/outlet?key=${config.api.key}`)
			const outlets = Object.values(await response.json())
			this.setState({
				outlets
			})
		} catch (e) {
			this.setState({errorMsg: e.message})
		}
	}

	render() {
		return (
			<div>
				<h2>Steckdosen</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.outlets.map(outlet => <RfOutlet key={outlet.name} outlet={outlet}/>)}
			</div>
		)
	}
}

module.exports = RfOutlets
