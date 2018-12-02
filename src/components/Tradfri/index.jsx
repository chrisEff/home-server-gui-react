'use strict'

const homeServerApi = require('../../homeServerApi')

const React = require('react')
const PropTypes = require('prop-types')

const LightGroup = require('./LightGroup')
const ErrorMessage = require('../ErrorMessage')

class Tradfri extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	constructor (props) {
		super(props)
		this.state = {
			groups: [],
			errorMsg: null,
		}
	}

	async componentDidMount () {
		try {
			const groups = await (await homeServerApi.get(`/tradfri/group`)).json()
			const devices = await (await homeServerApi.get(`/tradfri/device`)).json()

			groups.forEach(group => {
				group.devices = []
				group.deviceIds.forEach(deviceId => group.devices.push(devices.find(device => device.id === deviceId)))
				group.devices.sort((a, b) => a.name.localeCompare(b.name))
			})
			groups.sort((a, b) => a.name.localeCompare(b.name))

			this.setState({groups})
		} catch (e) {
			console.log(e)
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		return (
			<div id='tradfri'>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.groups.map(group => <LightGroup key={group.name} id={group.id} name={group.name} devices={group.devices}/>)}
			</div>
		)
	}
}

module.exports = Tradfri
