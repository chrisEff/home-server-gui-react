'use strict'

import React, { useRef } from 'react'
import { StyleSheet, css } from 'aphrodite'

import theme from '@/theme'

const LoginForm = ({ onLogin }) => {
	const apiUrlInput = useRef('')
	const apiUserInput = useRef('')
	const apiKeyInput = useRef('')

	return (
		<div className={css([styles.loginForm])}>
			<br/>

			<input className={css([styles.input])} placeholder='API URL' type='text' name='apiUrl' ref={apiUrlInput} /><br/>
			<input className={css([styles.input])} placeholder='API User' type='text' name='apiUser' ref={apiUserInput} /><br/>
			<input className={css([styles.input])} placeholder='API Key' type='password' name='apiKey' ref={apiKeyInput} /><br/>

			<div className={css([theme.styles.button])} onClick={ () => onLogin(apiUrlInput.current.value, apiUserInput.current.value, apiKeyInput.current.value) }>OK</div>
		</div>
	)
}

const styles = StyleSheet.create({
	loginForm: {
		textAlign: 'center',
	},
	input: {
		borderWidth: '0 0 1px 0',
		color: '#eee',
		backgroundColor: 'transparent',
		fontSize: '1.2em',
		margin: '30px',
		padding: '5px',
		width: '350px',
	},
})

export default LoginForm
