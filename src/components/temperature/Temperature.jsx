'use strict'

const api = require('../../../config').api
api.url = `${api.protocol}://${api.host}:${api.port}`

const React = require('react')
const PropTypes = require('prop-types')
const dateFormat = require('dateformat')
const sortBy = require('lodash.sortby')

const TemperatureSensor = require('./TemperatureSensor')
const ErrorMessage = require('../../ErrorMessage')

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
			const response = await fetch(`${api.url}/tempSensors/?key=${api.key}`)

			const date = new Date()
			date.setHours(0, 0, 0, 0)
			const timestampStartOfToday = Math.floor(date.getTime() / 1000)

			date.setDate(date.getDate() - 1)
			const timestampStartOfYesterday = Math.floor(date.getTime() / 1000)

			const tempSensors = await Promise.all(Object.values(await response.json()).map(async sensor => {
				const history = {}

				const historyToday     = (await Temperature.fetchHistory(sensor.id, timestampStartOfToday))
				const historyYesterday = (await Temperature.fetchHistory(sensor.id, timestampStartOfYesterday, timestampStartOfToday-1))

				for (let entry of historyYesterday) {
					if (entry.time % 120 === 0) {
						const time = dateFormat(new Date(entry.time * 1000), 'HH:MM')
						history[time] = { time: time, yesterday: entry.val }
					}
				}
				for (let entry of historyToday) {
					const time = dateFormat(new Date(entry.time * 1000), 'HH:MM')
					if (!history[time]) {
						history[time] = { time }
					}
					history[time].today = entry.val
				}

				sensor.history = sortBy(Object.values(history), ['time'])
				sensor.history.push({ time: '24:00' })

				return sensor
			}))
			this.setState({ tempSensors })
		} catch (e) {
			this.setState({ errorMsg: e.message })
		}
	}

	static async fetchHistory (sensorId, min, max) {
		let url = `${api.url}/tempSensors/${sensorId}/history?key=${api.key}&min=${min}`
		if (max) {
			url += `&max=${max}`
		}
		return (await fetch(url)).json()
	}

	render () {
		if (!this.state.tempSensors) {
			return <div/>
		}

		return (
			<div>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.tempSensors.map(sensor => <TemperatureSensor key={sensor.id} name={sensor.name} value={sensor.celsiusValue} history={sensor.history}/>)}
			</div>
		)
	}
}

module.exports = Temperature
