'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TemperatureSensor from './TemperatureSensor'

import {loadTempSensors} from '../../actions/temperature'

class Temperature extends React.Component {

	static propTypes = {
		title: PropTypes.string,
		tempSensors: PropTypes.arrayOf(
			PropTypes.object
		),
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return !this.props.tempSensors ? <div/> : (
			<div id='temperature'>
				<h2>{this.props.title}</h2>
				{this.props.tempSensors.map(sensor =>
					<TemperatureSensor key={sensor.id} name={sensor.name} value={sensor.celsiusValue} history={sensor.history}/>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	tempSensors: state.tempSensors,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadTempSensors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)
