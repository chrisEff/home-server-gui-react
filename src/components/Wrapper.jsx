'use strict'

import homeServerApi from '@/homeServerApi'

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import ErrorMessage from './ErrorMessage'
import LoginForm from './LoginForm'
import Tradfri from './Tradfri'
import RfOutlets from './RfOutlets'
import Shutters from './Shutters'
import Temperature from './Temperature'

import theme from '@/theme'

const Wrapper = (props) => {
	const [apiUrl, setApiUrl] = useState(null)
	const [apiUser, setApiUser] = useState(null)
	const [apiKey, setApiKey] = useState(null)

	useEffect(() => {
		if (window.localStorage.apiUrl) {
			updateCredentials(window.localStorage.apiUrl, window.localStorage.apiUser, window.localStorage.apiKey)
		}
	}, [])

	const updateCredentials = (apiUrl, apiUser, apiKey) => {
		// TODO Why do we need the credentials in the state AND the api client?
		setApiUrl(apiUrl)
		setApiUser(apiUser)
		setApiKey(apiKey)

		homeServerApi.setApiUrl(apiUrl)
		homeServerApi.apiUser = apiUser
		homeServerApi.apiKey = apiKey

		window.localStorage.setItem('apiUrl', apiUrl)
		window.localStorage.setItem('apiUser', apiUser)
		window.localStorage.setItem('apiKey', apiKey)
	}

	const unsetCredentials = () => {
		setApiUrl(undefined)
		setApiUser(undefined)
		setApiKey(undefined)

		homeServerApi.setApiUrl(undefined)
		homeServerApi.apiUser = undefined
		homeServerApi.apiKey = undefined

		window.localStorage.removeItem('apiUrl')
		window.localStorage.removeItem('apiUser')
		window.localStorage.removeItem('apiKey')
	}

	if (!homeServerApi.apiUrl) {
		return <LoginForm onLogin={updateCredentials} />
	}
	return (
		<div className={css([styles.wrapper])}>
			<div className={css([theme.styles.button, styles.logoutButton])}>
				<div onClick={unsetCredentials}>
					Log out
				</div>
			</div>
			{props.errorMessage && <ErrorMessage message={props.errorMessage} />}
			<Tradfri title='Licht'/>
			<RfOutlets title='Steckdosen'/>
			<Shutters title='Rollläden'/>
			<Temperature title='Temperatur'/>
		</div>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgb(49, 51, 53)',
		color: '#eee',
		fontFamily: 'SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
		padding: '20px 0 0 20px',
	},
	logoutButton: {
		float: 'right',
		margin: '0 20px',
	},
})

const mapStateToProps = state => ({
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
export { Wrapper }

