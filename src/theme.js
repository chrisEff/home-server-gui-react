'use strict'

import {StyleSheet} from 'aphrodite'

const vars = {
	elementColor: 'rgb(60, 63, 65)',
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: vars.elementColor,
		cursor: 'pointer',
		display: 'inline-block',
		padding: '10px',
		userSelect: 'none',
	},
	section: {

	},
	sectionBody: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	deviceGroup: {

	},
	deviceGroupBody: {
		display: 'flex',
	},
	device: {
		backgroundColor: vars.elementColor,
		borderRadius: '10px',
		margin: '0 20px 20px 0',
		overflow: 'hidden',
		padding: '10px',
		textAlign: 'center',
		width: '120px',
	},
})

export default {
	vars,
	styles,
}
