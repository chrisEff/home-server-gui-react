'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Title from './Title'
import BrightnessSlider from './BrightnessSlider'
import ColorSwitcher from './ColorSwitcher'
import Switch from './Switch'

const Light = ({bulb}) => {
	const className = bulb.state ? 'light on' : 'light'
	return (
		<div className={className + ' ' + bulb.color}>
			<Title deviceId={bulb.id} title={bulb.name} />
			<Switch deviceId={bulb.id} state={bulb.state} />
			<BrightnessSlider deviceId={bulb.id} brightness={bulb.brightness} />
			<ColorSwitcher deviceId={bulb.id} bulbType={bulb.bulbType} color={bulb.color} />
		</div>
	)
}

Light.propTypes = {
	id: PropTypes.number,
	bulb: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
	bulb: state.tradfriDevices.find(device => device.id === ownProps.id),
})
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Light)
export {Light}
