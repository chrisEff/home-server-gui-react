'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TemperatureChart from './TemperatureChart'

const TemperatureSensor = ({sensor}) => (
	<div style={styles.tempSensor} className='tempSensor'>
		<h4 className='name'>{sensor.name}</h4>
		<div className='value'>{Math.round(sensor.celsiusValue * 10) / 10}°C</div>

		{ sensor.history && <TemperatureChart data={sensor.history} /> }
	</div>
)

TemperatureSensor.propTypes = {
	id: PropTypes.number,
	sensor: PropTypes.shape({
		name: PropTypes.string,
		celsiusValue: PropTypes.number,
		history: PropTypes.array,
	}).isRequired,
}

const styles = {
	tempSensor: {
		height: '280px',
		width: '920px',
	},
}

const mapStateToProps = (state, ownProps) => ({
	sensor: state.tempSensors.find(sensor => sensor.id === ownProps.id),
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureSensor)
export {TemperatureSensor}
