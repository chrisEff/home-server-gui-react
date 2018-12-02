'use strict'

const React = require('react')
const PropTypes = require('prop-types')

let Switch = ({state, onchange}) =>
	<div className='bulb' onClick={() => onchange(state ? 0 : 1)}>💡</div>

Switch.propTypes = {
	state: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

module.exports = Switch
