'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import {setDeviceState} from '@/actions/tradfri'

let Switch = ({deviceId, state, color, onChange}) =>
	<div
		className={css(state ? [styles.bulb, styles.on, styles[color]] : [styles.bulb])}
		onClick={() => onChange(deviceId, state ? 0 : 1)}>💡</div>


Switch.propTypes = {
	color: PropTypes.string,
	deviceId: PropTypes.number.isRequired,
	state: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

const styles = StyleSheet.create({
	bulb: {
		':before': {
			color: 'transparent',
			content: "'💡'",
			opacity: '0.3',
			position: 'absolute',
			fontSize: '80px',
			filter: 'none',
			height: '68px',
			overflow: 'hidden',
		},
		cursor: 'pointer',
		filter: 'grayscale(100%) blur(5px)',
		fontSize: 80,
		paddingTop: '15px',
		textAlign: 'center',
		userSelect: 'none',
	},
	on: {
		filter: 'none',
	},
	warm: {
		textShadow: '0 0 1px black, 0 0 50px #efd275',
		':before': {textShadow: '0 0 0 #efd275'},
	},
	neutral: {
		textShadow: '0 0 1px black, 0 0 50px #f1e0b5',
		':before': {textShadow: '0 0 0 #f1e0b5'},
	},
	cold: {
		textShadow: '0 0 1px black, 0 0 50px #f5faf6',
		':before': {textShadow: '0 0 0 #f5faf6'},
	},
	red: {
		textShadow: '0 0 1px black, 0 0 50px red',
		':before': {textShadow: '0 0 0 red'},
	},
	green: {
		textShadow: '0 0 1px black, 0 0 50px green',
		':before': {textShadow: '0 0 0 green'},
	},
	blue: {
		textShadow: '0 0 1px black, 0 0 50px blue',
		':before': {textShadow: '0 0 0 blue'},
	},
	yellow: {
		textShadow: '0 0 1px black, 0 0 50px yellow',
		':before': {textShadow: '0 0 0 yellow'},
	},
	pink: {
		textShadow: '0 0 1px black, 0 0 50px deeppink',
		':before': {textShadow: '0 0 0 deeppink'},
	},
	purple: {
		textShadow: '0 0 1px black, 0 0 50px mediumpurple',
		':before': {textShadow: '0 0 0 mediumpurple'},
	},
})

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, state) => dispatch(setDeviceState(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Switch)
export {Switch}
