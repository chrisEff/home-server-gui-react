'use strict'

const React = require('react')

const LoginForm = require('./LoginForm')
const Tradfri = require('./tradfri/Tradfri')
const RfOutlets = require('./rfOutlets/RfOutlets')
const Temperature = require('./temperature/Temperature')

const homeServerApi = require('../homeServerApi')

class Wrapper extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			apiUrl: null,
			apiKey: null,
		}
	}

	async componentDidMount () {
		if (window.localStorage.apiUrl) {
			this.updateCredentials(window.localStorage.apiUrl, window.localStorage.apiUser, window.localStorage.apiKey)
		}
	}

	updateCredentials = (apiUrl, apiUser, apiKey) => {
		this.setState({ apiUrl, apiUser, apiKey })
		homeServerApi.apiUrl = apiUrl
		homeServerApi.apiUser = apiUser
		homeServerApi.apiKey = apiKey

		window.localStorage.setItem('apiUrl', apiUrl)
		window.localStorage.setItem('apiUser', apiUser)
		window.localStorage.setItem('apiKey', apiKey)
	}

	render () {
		if (!this.state.apiUrl) {
			return <LoginForm onLogin={this.updateCredentials} />
		}
		return (
			<div>
				<Tradfri title='Licht'/>
				<RfOutlets title='Steckdosen'/>
				<Temperature title='Temperatur'/>
			</div>
		)
	}
}

module.exports = Wrapper
