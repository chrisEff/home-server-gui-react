'use strict'

const api = require('../../config').api
api.url = `${api.protocol}://${api.host}:${api.port}`

const React = require('react')
const PropTypes = require('prop-types')
const Light = require('./Light')

class LightGroup extends React.Component {

	static propTypes = {
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		devices: PropTypes.array.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {
			name: props.name,
			editMode: false,
		}
	}

	render () {
		return (
			<div className='lightGroup'>
				{!this.state.editMode && <h3 className='name' onClick={() => { this.setState({editMode: true}) }}>{this.state.name}</h3>}
				{this.state.editMode && <div>
					<input ref='name' defaultValue={this.state.name} />
					<button onClick={() => { this.updateName(this.refs.name.value) }}>OK</button>
				</div>}

				{
					this.props.devices
						.filter(device => device.type === 'bulb')
						.map(device => <Light key={device.name} bulb={device}/>)
				}
			</div>
		)
	}

	updateName = async (name) => {
		await fetch(`${api.url}/tradfri/group/${this.props.id}/name/${name}?key=${api.key}`, {method: 'PUT'})

		this.setState({name, editMode: false})
	}
}

module.exports = LightGroup
