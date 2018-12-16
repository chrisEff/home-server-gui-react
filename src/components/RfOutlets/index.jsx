'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import RfOutlet from './RfOutlet'

import {loadOutlets} from '../../actions/outlets'

class RfOutlets extends React.Component {

	static propTypes = {
		title: PropTypes.string,
		outlets: PropTypes.array,
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return (
			<div id='rfOutlets'>
				<h2>{this.props.title}</h2>
				{this.props.outlets.map(outlet => <RfOutlet key={outlet.name} id={outlet.id}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	outlets: state.outlets,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadOutlets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlets)
