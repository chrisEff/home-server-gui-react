'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const BrightnessSlider = ({brightness, onchange}) =>
	<input className='brightness-slider'
				 type='range' min='0' max='254' defaultValue={brightness}
				 onMouseUp={(e) => onchange(e.target.value)}/>

BrightnessSlider.propTypes = {
	brightness: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

module.exports = BrightnessSlider
