'use strict'

const api = require('../../../config').api
api.url = `${api.protocol}://${api.host}:${api.port}`

const React = require('react')
const PropTypes = require('prop-types')

const RfOutlet = require('./RfOutlet')
const ErrorMessage = require('../ErrorMessage')

class RfOutlets extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	constructor (props) {
		super(props)
		this.state = {
			outlets: [],
			errorMsg: null,
		}
	}

	async componentDidMount () {
		try {
			const response = await fetch(`${api.url}/rfoutlets/outlet?key=${api.key}`)
			const outlets = Object.values(await response.json())
			this.setState({outlets})
		} catch (e) {
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		return (
			<div>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.outlets.map(outlet => <RfOutlet key={outlet.name} outlet={outlet}/>)}
			</div>
		)
	}
}

module.exports = RfOutlets
