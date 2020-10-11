'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const TemperatureChart = ({ data }) => (
	<LineChart syncId="temp" width={900} height={240} data={data} margin={{ top: 5, right: 5, left: -5, bottom: 5 }}>
		<CartesianGrid strokeDasharray="2 6" stroke="rgb(135, 147, 155)" />
		<XAxis dataKey="time" ticks={['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00']} />
		<YAxis />
		<Tooltip />
		<Line name="yesterday" dot={false} type="linear" dataKey="yesterday" stroke="blue" />
		<Line name="today" dot={false} type="linear" dataKey="today" stroke="red" />
	</LineChart>
)

TemperatureChart.propTypes = {
	data: PropTypes.array,
}

export default TemperatureChart
