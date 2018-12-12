'use strict'

import homeServerApi from '../homeServerApi'

import React from 'react'

import LoginForm from './LoginForm'
import Tradfri from './Tradfri'
import RfOutlets from './RfOutlets'
import Shutters from './Shutters'
import Temperature from './Temperature'

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
		this.setState({apiUrl, apiUser, apiKey})
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
				<div style={{float: 'right', backgroundColor: 'rgb(60, 63, 65)', padding: '10px', margin: '0 20px'}}>
					<div onClick={() => this.updateCredentials(null, null, null)}>
						Log out
					</div>
				</div>
				<Tradfri title='Licht'/>
				<RfOutlets title='Steckdosen'/>
				<Shutters title='Rollläden'/>
				<Temperature title='Temperatur'/>
			</div>
		)
	}
}

export default Wrapper
