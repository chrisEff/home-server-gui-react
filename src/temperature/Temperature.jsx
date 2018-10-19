'use strict'

const api = require('../../config').api
api.url = `${api.protocol}://${api.host}:${api.port}`

const React = require('react')
const PropTypes = require('prop-types')

const TemperatureSensor = require('./TemperatureSensor')
const ErrorMessage = require('../ErrorMessage')

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
			const tempSensors = Object.values(await response.json())
			this.setState({tempSensors})
		} catch (e) {
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		if (!this.state.tempSensors) {
			return <div/>
		}

		return (
			<div>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				<table>
					<tbody>
						{this.state.tempSensors.map(sensor => <TemperatureSensor key={sensor.id} name={sensor.name} value={sensor.celsiusValue}/>)}
					</tbody>
				</table>
			</div>
		)
	}
}

module.exports = Temperature
