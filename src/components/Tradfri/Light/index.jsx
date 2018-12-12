'use strict'

import homeServerApi from '../../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import BrightnessSlider from './BrightnessSlider'
import ColorSwitcher from './ColorSwitcher'
import Switch from './Switch'

class Light extends React.Component {

	static propTypes = {
		bulb: PropTypes.object.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {bulb: props.bulb}
	}

	render () {
		const bulb = this.state.bulb
		const className = bulb.state ? 'light on' : 'light'
		return (
			<div className={className + ' ' + bulb.color}>
				<Title title={bulb.name} onChange={this.updateName} />

				<Switch state={bulb.state} onchange={this.updateState}/>
				<BrightnessSlider brightness={bulb.brightness} onchange={this.updateBrightness}/>
				<ColorSwitcher bulbType={bulb.bulbType} color={bulb.color} onchange={this.updateColor}/>
			</div>
		)
	}

	updateName = async (name) => {
		const bulb = this.state.bulb
		if (name !== bulb.name) {
			await homeServerApi.put(`/tradfri/device/${bulb.id}/name/${name}`)

			bulb.name = name
			this.setState({bulb})
		}
	}

	updateState = async (state) => {
		const bulb = this.state.bulb
		await homeServerApi.put(`/tradfri/device/${bulb.id}/state/${state}`)

		bulb.state = state
		this.setState({bulb})
	}

	updateBrightness = async (brightness) => {
		const bulb = this.state.bulb
		await homeServerApi.put(`/tradfri/device/${bulb.id}/brightness/${brightness}`)

		bulb.brightness = brightness
		this.setState({bulb})
	}

	updateColor = async (color) => {
		const bulb = this.state.bulb
		await homeServerApi.put(`/tradfri/device/${bulb.id}/color/${color}`)

		bulb.color = color
		this.setState({bulb})
	}
}

export default Light
