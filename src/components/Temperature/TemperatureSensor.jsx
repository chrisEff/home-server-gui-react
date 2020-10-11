'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import TemperatureChart from './TemperatureChart'
import theme from '@/theme'

const TemperatureSensor = ({ sensor }) => (
	<div className={css([theme.styles.device, styles.tempSensor])}>
		<span className={css([styles.name])}>{sensor.name}</span>
		<div className={css([styles.value])}>{Math.round(sensor.celsiusValue * 10) / 10}°C</div>

		{sensor.history && <TemperatureChart data={sensor.history} />}
	</div>
)

TemperatureSensor.propTypes = {
	id: PropTypes.number,
	sensor: PropTypes.shape({
		name: PropTypes.string,
		celsiusValue: PropTypes.number,
		history: PropTypes.array,
	}).isRequired,
	history: PropTypes.array,
}

const styles = StyleSheet.create({
	tempSensor: {
		height: '280px',
		width: '920px',
	},
	name: {
		marginLeft: '20px',
		marginTop: '5px',
		float: 'left',
	},
	value: {
		float: 'right',
		fontSize: '2.2em',
	},
})

const mapStateToProps = (state, ownProps) => ({
	sensor: state.tempSensors.find((sensor) => sensor.id === ownProps.id),
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureSensor)
export { TemperatureSensor }
