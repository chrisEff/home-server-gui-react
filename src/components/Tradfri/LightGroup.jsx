'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Light from './Light'
import {setTradfriGroupName} from '../../actions'

class LightGroup extends React.Component {

	static propTypes = {
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		devices: PropTypes.array.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {
			editMode: false,
		}
	}

	render () {
		return (
			<div className='lightGroup'>
				{!this.state.editMode && <h3 className='name' onClick={() => { this.setState({editMode: true}) }}>{this.state.name}</h3>}
				{this.state.editMode && <div>
					<input ref='name' defaultValue={this.props.name} />
					<button onClick={() => { this.props.onSaveName(this.props.id, this.refs.name.value) }}>OK</button>
				</div>}

				{
					this.props.devices
						.filter(device => device.type === 'bulb')
						.map(device => <Light key={device.name} id={device.id} />)
				}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	devices: state.tradfriDevices.filter(device => ownProps.deviceIds.includes(device.id)),
})

const mapDispatchToProps = dispatch => ({
	onSaveName: (id, name) => dispatch(setTradfriGroupName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LightGroup)
export {LightGroup}
