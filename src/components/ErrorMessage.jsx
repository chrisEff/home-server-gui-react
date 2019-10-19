'use strict'

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const ErrorMessage = ({message}) =>
	<div className={css([styles.errorMessage])}>{message}</div>

const styles = StyleSheet.create({
	errorMessage: {
		color: 'red',
	},
})

export default ErrorMessage
