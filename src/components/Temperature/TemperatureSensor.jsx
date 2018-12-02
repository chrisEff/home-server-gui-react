'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const TemperatureChart = require('./TemperatureChart')

const TemperatureSensor = ({name, value, history}) => (
	<div className='tempSensor'>
		<h4 className='name'>{name}</h4>
		<div className='value'>{Math.round(value * 10) / 10}°C</div>

		{ history && <TemperatureChart data={history} /> }
	</div>
)

TemperatureSensor.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number,
	history: PropTypes.array,
}

module.exports = TemperatureSensor
