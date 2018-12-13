'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Shutter from './Shutter'
import ErrorMessage from '../ErrorMessage'

import {setShutters} from '../../actions'

class Shutters extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	constructor (props) {
		super(props)
		this.state = {
			errorMsg: null,
		}
	}

	async componentDidMount () {
		try {
			const response = await homeServerApi.get(`/shutters/shutter`)
			const shutters = Object.values(await response.json())
			this.props.onLoad(shutters)
		} catch (e) {
			console.log(e)
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		return (
			<div id='shutters'>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.props.shutters.map(shutter => <Shutter key={shutter.name} shutter={shutter}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	shutters: state.shutters,
})

const mapDispatchToProps = dispatch => ({
	onLoad: shutters => dispatch(setShutters(shutters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shutters)
