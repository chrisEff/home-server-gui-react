'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'
import sortBy from 'lodash.sortby'

import TemperatureSensor from './TemperatureSensor'
import ErrorMessage from '../ErrorMessage'

class Temperature extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	constructor (props) {
		super(props)
		this.state = {
			tempSensors: [],
			errorMsg: null,
		}
	}

	async componentDidMount () {
		try {
			const response = await homeServerApi.get(`/tempSensors/`)

			const date = new Date()
			date.setHours(0, 0, 0, 0)
			const timestampStartOfToday = Math.floor(date.getTime() / 1000)

			date.setDate(date.getDate() - 1)
			const timestampStartOfYesterday = Math.floor(date.getTime() / 1000)

			const tempSensors = await Promise.all(Object.values(await response.json()).map(async sensor => {
				const history = {}

				const historyToday     = (await Temperature.fetchHistory(sensor.id, timestampStartOfToday))
				const historyYesterday = (await Temperature.fetchHistory(sensor.id, timestampStartOfYesterday, timestampStartOfToday - 1))

				for (let entry of historyYesterday) {
					if (entry.time % 120 === 0) {
						const time = dateFormat(new Date(entry.time * 1000), 'HH:MM')
						history[time] = {time: time, yesterday: entry.val}
					}
				}
				for (let entry of historyToday) {
					const time = dateFormat(new Date(entry.time * 1000), 'HH:MM')
					if (!history[time]) {
						history[time] = {time}
					}
					history[time].today = entry.val
				}

				sensor.history = sortBy(Object.values(history), ['time'])
				sensor.history.push({time: '24:00'})

				return sensor
			}))
			this.setState({tempSensors})
		} catch (e) {
			console.log(e)
			this.setState({errorMsg: e.message})
		}
	}

	static async fetchHistory (sensorId, min, max) {
		return (await homeServerApi.get(`/tempSensors/${sensorId}/history`, {min, max})).json()
	}

	render () {
		if (!this.state.tempSensors) {
			return <div/>
		}

		return (
			<div id='temperature'>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.tempSensors.map(sensor => <TemperatureSensor key={sensor.id} name={sensor.name} value={sensor.celsiusValue} history={sensor.history}/>)}
			</div>
		)
	}
}

export default Temperature
