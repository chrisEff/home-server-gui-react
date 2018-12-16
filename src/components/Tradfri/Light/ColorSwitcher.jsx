'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setTradfriBulbColor} from '../../../actions'

const ColorSwitcher = ({deviceId, bulbType, color, onChange}) => {
	if (bulbType === 'rgb') {
		return (
			<div className='color-switcher'>
				<div className={color === 'red'     ? 'color red active'     : 'color red'}     onClick={() => onChange(deviceId, 'red')}><div></div></div>
				<div className={color === 'green'   ? 'color green active'   : 'color green'}   onClick={() => onChange(deviceId, 'green')}><div></div></div>
				<div className={color === 'blue'    ? 'color blue active'    : 'color blue'}    onClick={() => onChange(deviceId, 'blue')}><div></div></div>
				<div className={color === 'yellow'  ? 'color yellow active'  : 'color yellow'}  onClick={() => onChange(deviceId, 'yellow')}><div></div></div>
				<div className={color === 'pink'    ? 'color pink active'    : 'color pink'}    onClick={() => onChange(deviceId, 'pink')}><div></div></div>
				<div className={color === 'purple'  ? 'color purple active'  : 'color purple'}  onClick={() => onChange(deviceId, 'purple')}><div></div></div>
				<div className={color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={() => onChange(deviceId, 'warm')}><div></div></div>
				<div className={color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={() => onChange(deviceId, 'neutral')}><div></div></div>
				<div className={color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={() => onChange(deviceId, 'cold')}><div></div></div>
			</div>
		)
	}
	if (bulbType === 'white-spectrum') {
		return (
			<div className='color-switcher spectrum'>
				<div className={color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={() => onChange(deviceId, 'warm')}><div></div></div>
				<div className={color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={() => onChange(deviceId, 'neutral')}><div></div></div>
				<div className={color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={() => onChange(deviceId, 'cold')}><div></div></div>
			</div>
		)
	}
	if (bulbType === 'white') {
		return (
			<div className='color-switcher white'>
				<div className='color neutral active'><div></div></div>
			</div>
		)
	}
	return <div/>
}

ColorSwitcher.propTypes = {
	deviceId: PropTypes.number.isRequired,
	bulbType: PropTypes.string.isRequired,
	color: PropTypes.string,
	onchange: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, color) => dispatch(setTradfriBulbColor(id, color)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwitcher)
export {ColorSwitcher}
