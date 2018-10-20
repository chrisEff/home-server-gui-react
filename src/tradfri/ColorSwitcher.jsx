'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const ColorSwitcher = ({bulbType, color, onchange}) => {
	if (bulbType === 'rgb') {
		return (
			<div className='color-switcher'>
				<div className={color === 'red'     ? 'color red active'     : 'color red'}     onClick={() => onchange('red')}><div></div></div>
				<div className={color === 'green'   ? 'color green active'   : 'color green'}   onClick={() => onchange('green')}><div></div></div>
				<div className={color === 'blue'    ? 'color blue active'    : 'color blue'}    onClick={() => onchange('blue')}><div></div></div>
				<div className={color === 'yellow'  ? 'color yellow active'  : 'color yellow'}  onClick={() => onchange('yellow')}><div></div></div>
				<div className={color === 'pink'    ? 'color pink active'    : 'color pink'}    onClick={() => onchange('pink')}><div></div></div>
				<div className={color === 'purple'  ? 'color purple active'  : 'color purple'}  onClick={() => onchange('purple')}><div></div></div>
				<div className={color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={() => onchange('warm')}><div></div></div>
				<div className={color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={() => onchange('neutral')}><div></div></div>
				<div className={color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={() => onchange('cold')}><div></div></div>
			</div>
		)
	}
	if (bulbType === 'white-spectrum') {
		return (
			<div className='color-switcher spectrum'>
				<div className={color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={() => onchange('warm')}><div></div></div>
				<div className={color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={() => onchange('neutral')}><div></div></div>
				<div className={color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={() => onchange('cold')}><div></div></div>
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
	bulbType: PropTypes.string.isRequired,
	color: PropTypes.string,
	onchange: PropTypes.func,
}

module.exports = ColorSwitcher
