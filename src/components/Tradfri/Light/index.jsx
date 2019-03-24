'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import Title from './Title'
import BrightnessSlider from './BrightnessSlider'
import ColorSwitcher from './ColorSwitcher'
import Switch from './Switch'
import theme from '@/theme'

const Light = ({bulb}) => {
	const className = bulb.state ? 'light on' : 'light'
	return (
		<div className={css([theme.styles.device, styles.light, bulb.state ? styles.on : styles.off]) + ' ' + className + ' ' + bulb.color}>
			<Title deviceId={bulb.id} title={bulb.name} />
			<Switch deviceId={bulb.id} state={bulb.state} />
			{!!bulb.state && <BrightnessSlider deviceId={bulb.id} brightness={bulb.brightness} />}
			{!!bulb.state && <ColorSwitcher deviceId={bulb.id} bulbType={bulb.bulbType} selected={bulb.colors} />}
		</div>
	)
}

Light.propTypes = {
	id: PropTypes.number,
	bulb: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
	light: {
		height: '316px',
	},
	on: {
		color: '#eee',
	},
	off: {
		color: 'rgb(135, 147, 155)',
	},
})

const mapStateToProps = (state, ownProps) => ({
	bulb: state.tradfriDevices.find(device => device.id === ownProps.id),
})
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Light)
export {Light}
