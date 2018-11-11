'use strict'

const homeServerApi = require('../../homeServerApi')

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
			const response = await homeServerApi.get(`/rfoutlets/outlet`)
			const outlets = Object.values(await response.json())
			this.setState({outlets})
		} catch (e) {
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		return (
			<div id='rfOutlets'>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.outlets.map(outlet => <RfOutlet key={outlet.name} outlet={outlet}/>)}
			</div>
		)
	}
}

module.exports = RfOutlets
