'use strict'

const api = require('../../../config').api
api.url = `${api.protocol}://${api.host}:${api.port}`

const React = require('react')
const PropTypes = require('prop-types')

const LightTitle = require('./LightTitle')
const BrightnessSlider = require('./BrightnessSlider')
const ColorSwitcher = require('./ColorSwitcher')
const LightSwitch = require('./LightSwitch')

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
				<LightTitle title={bulb.name} onChange={this.updateName} />

				<LightSwitch state={bulb.state} onchange={this.updateState}/>
				<BrightnessSlider brightness={bulb.brightness} onchange={this.updateBrightness}/>
				<ColorSwitcher bulbType={bulb.bulbType} color={bulb.color} onchange={this.updateColor}/>
			</div>
		)
	}

	updateName = async (name) => {
		const bulb = this.state.bulb
		await fetch(`${api.url}/tradfri/device/${bulb.id}/name/${name}?key=${api.key}`, {method: 'PUT'})

		bulb.name = name
		this.setState({bulb})
	}

	updateState = async (state) => {
		const bulb = this.state.bulb
		await fetch(`${api.url}/tradfri/device/${bulb.id}/state/${state}?key=${api.key}`, {method: 'PUT'})

		bulb.state = state
		this.setState({bulb})
	}

	updateBrightness = async (brightness) => {
		const bulb = this.state.bulb
		await fetch(`${api.url}/tradfri/device/${bulb.id}/brightness/${brightness}?key=${api.key}`, {method: 'PUT'})

		bulb.brightness = brightness
		this.setState({bulb})
	}

	updateColor = async (color) => {
		const bulb = this.state.bulb
		await fetch(`${api.url}/tradfri/device/${bulb.id}/color/${color}?key=${api.key}`, {method: 'PUT'})

		bulb.color = color
		this.setState({bulb})
	}
}

module.exports = Light
