'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const BrightnessSlider = ({brightness, onchange}) =>
	<input
		className='brightness-slider'
		type='range'
		min='0'
		max='254'
		defaultValue={brightness}
		onMouseUp={(e) => onchange(e.target.value)}
	/>

BrightnessSlider.propTypes = {
	brightness: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

export default BrightnessSlider
