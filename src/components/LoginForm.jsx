'use strict'

import React from 'react'

class LoginForm extends React.Component {

	render () {
		return (
			<div className='loginForm'>
				<br/><br/>

				<input placeholder='API URL' type='text' name='apiUrl' ref='apiUrl' /><br/>
				<input placeholder='API User' type='text' name='apiUser' ref='apiUser' /><br/>
				<input placeholder='API Key' type='password' name='apiKey' ref='apiKey' /><br/>

				<button onClick={ () => this.props.onLogin(this.refs.apiUrl.value, this.refs.apiUser.value, this.refs.apiKey.value) }>OK</button>
			</div>
		)
	}

}

export default LoginForm
