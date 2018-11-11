'use strict'

const React = require('react')

class LoginForm extends React.Component {

	render () {
		return (
			<div style={{textAlign: 'center'}}>
				<br/><br/>

				API URL:<br/>
				<input type='text' name='apiUrl' ref='apiUrl' style={{width: 250}}/><br/><br/><br/>

				API Key:<br/>
				<input type='text' name='apiKey' ref='apiKey' style={{width: 250}}/><br/><br/><br/>

				<button onClick={ () => this.props.onLogin(this.refs.apiUrl.value, this.refs.apiKey.value) }>OK</button>
			</div>
		)
	}

}

module.exports = LoginForm