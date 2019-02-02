'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setDeviceBrightness} from '@/actions/tradfri'

const BrightnessSlider = ({deviceId, brightness, onChange}) =>
	<input
		style={styles.brightnessSlider}
		type='range'
		min='0'
		max='254'
		defaultValue={brightness}
		onMouseUp={(e) => onChange(deviceId, parseInt(e.target.value))}
	/>

BrightnessSlider.propTypes = {
	deviceId: PropTypes.number.isRequired,
	brightness: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

const styles = {
	brightnessSlider: {
		margin: '20px 0',
		width: '120px',
	},
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, brightness) => dispatch(setDeviceBrightness(id, brightness)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BrightnessSlider)
export {BrightnessSlider}
