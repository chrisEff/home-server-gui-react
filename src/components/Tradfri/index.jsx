'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'

import LightGroup from './LightGroup'
import ErrorMessage from '../ErrorMessage'

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

export default Tradfri
