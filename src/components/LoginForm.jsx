'use strict'

import React, {useRef} from 'react'

const LoginForm = ({onLogin}) => {
	const apiUrlInput = useRef('')
	const apiUserInput = useRef('')
	const apiKeyInput = useRef('')

	return (
		<div className='loginForm'>
			<br/>

			<input placeholder='API URL' type='text' name='apiUrl' ref={apiUrlInput} /><br/>
			<input placeholder='API User' type='text' name='apiUser' ref={apiUserInput} /><br/>
			<input placeholder='API Key' type='password' name='apiKey' ref={apiKeyInput} /><br/>

			<button onClick={ () => onLogin(apiUrlInput.current.value, apiUserInput.current.value, apiKeyInput.current.value) }>OK</button>
		</div>
	)
}

export default LoginForm
