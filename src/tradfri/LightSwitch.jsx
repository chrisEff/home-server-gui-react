const React = require('react')
const PropTypes = require('prop-types')

let LightSwitch = ({state, onchange}) =>
	<div className='bulb' onClick={() => onchange(state ? 0 : 1)}>💡</div>;

LightSwitch.propTypes = {
	state: PropTypes.number.isRequired,
	onchange: PropTypes.func
}

module.exports = LightSwitch
