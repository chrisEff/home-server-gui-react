'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const TemperatureSensor = ({name, value}) => <tr>
	<td>{name}:</td>
	<td>{value}°C</td>
</tr>

TemperatureSensor.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number
}

module.exports = TemperatureSensor
