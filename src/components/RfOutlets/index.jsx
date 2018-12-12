'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'

import RfOutlet from './RfOutlet'
import ErrorMessage from '../ErrorMessage'

class RfOutlets extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	constructor (props) {
		super(props)
		this.state = {
			outlets: [],
			errorMsg: null,
		}
	}

	async componentDidMount () {
		try {
			const response = await homeServerApi.get(`/rfoutlets/outlet`)
			const outlets = Object.values(await response.json())
			this.setState({outlets})
		} catch (e) {
			console.log(e)
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		return (
			<div id='rfOutlets'>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.outlets.map(outlet => <RfOutlet key={outlet.name} outlet={outlet}/>)}
			</div>
		)
	}
}

export default RfOutlets
