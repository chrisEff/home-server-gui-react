'use strict'

import React from 'react'

const ErrorMessage = ({message}) =>
	<div style={styles.errorMessage}>{message}</div>

const styles = {
	errorMessage: {
		color: 'red',
	},
}

export default ErrorMessage
