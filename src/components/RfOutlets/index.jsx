'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import RfOutlet from './RfOutlet'
import ErrorMessage from '../ErrorMessage'

import {setOutlets} from '../../actions'

class RfOutlets extends React.Component {

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
			const response = await homeServerApi.get(`/rfoutlets/outlet`)
			const outlets = Object.values(await response.json())
			this.props.onLoad(outlets)
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
				{this.props.outlets.map(outlet => <RfOutlet key={outlet.name} id={outlet.id}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	outlets: state.outlets,
})

const mapDispatchToProps = dispatch => ({
	onLoad: outlets => dispatch(setOutlets(outlets)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlets)
