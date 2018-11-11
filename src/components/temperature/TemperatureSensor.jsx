'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } = require('recharts')

const TemperatureSensor = ({ name, value, history }) => (
	<div className='tempSensor'>
		<h4 className='name'>{name}</h4>
		<div className='value'>{Math.round(value * 10) / 10}°C</div>

		<LineChart syncId='temp' width={900} height={240} data={history} margin={{ top: 5, right: 5, left: -5, bottom: 5 }}>
			<CartesianGrid strokeDasharray="2 6" stroke="rgb(135, 147, 155)" />
			<XAxis dataKey="time" ticks={['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00']} />
			<YAxis />
			<Tooltip />
			<Line name='yesterday' dot={false} type="linear" dataKey="yesterday" stroke="blue" />
			<Line name='today' dot={false} type="linear" dataKey="today" stroke="red" />
		</LineChart>
	</div>
)

TemperatureSensor.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number,
	history: PropTypes.array,
}

module.exports = TemperatureSensor
