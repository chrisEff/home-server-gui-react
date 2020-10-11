'use strict'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'aphrodite'

import TemperatureSensor from './TemperatureSensor'

import { loadTempSensors } from '@/actions/temperature'
import theme from '@/theme'

const Temperature = (props) => {
	useEffect(() => {
		props.onLoad()
	}, [])

	return !props.tempSensors ? <div/> : (
		<div className={css([theme.styles.section])}>
			<h2>{props.title}</h2>
			<div className={css([theme.styles.sectionBody])}>
				{props.tempSensors.map((sensor) =>
					<TemperatureSensor key={sensor.id} id={sensor.id}/>,
				)}
			</div>
		</div>
	)
}

Temperature.propTypes = {
	title: PropTypes.string,
	tempSensors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		}),
	),
}

const mapStateToProps = (state) => ({
	tempSensors: state.tempSensors,
})

const mapDispatchToProps = (dispatch) => ({
	onLoad: () => dispatch(loadTempSensors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)
