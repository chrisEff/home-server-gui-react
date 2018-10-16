'use strict'

const config = require('../../config')

const React = require('react')
const BrightnessSlider = require('./BrightnessSlider')
const ColorSwitcher = require('./ColorSwitcher')
const LightSwitch = require('./LightSwitch')

class Light extends React.Component {
	constructor (props) {
		super(props)
		this.state = {bulb: props.bulb}
	}

	render () {
		const bulb = this.state.bulb;
		const className = bulb.state ? 'light on' : 'light'
		return (
			<div className={className + ' ' + bulb.color}>
				<span className={bulb.name.length > 15 ? 'name long' : 'name'}>{bulb.name}</span>

				<LightSwitch state={bulb.state} onchange={this.updateState}/>
				<BrightnessSlider brightness={bulb.brightness} onchange={this.updateBrightness}/>
				<ColorSwitcher bulbType={bulb.bulbType} color={bulb.color} onchange={this.updateColor}/>
			</div>
		)
	}

	updateState = async (state) => {
		const bulb = this.state.bulb
		await fetch(
			`${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/state/${state}?key=${config.api.key}`,
			{method: 'PUT'}
		)

		bulb.state = state
		this.setState({bulb})
	}

	updateBrightness = async (brightness) => {
		const bulb = this.state.bulb
		await fetch(
			`${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/brightness/${brightness}?key=${config.api.key}`,
			{method: 'PUT'}
		)

		bulb.brightness = brightness
		this.setState({bulb})
	}

	updateColor = async (color) => {
		const bulb = this.state.bulb
		await fetch(
			`${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/color/${color}?key=${config.api.key}`,
			{method: 'PUT'}
		)

		bulb.color = color
		this.setState({bulb})
	}
}

module.exports = Light
