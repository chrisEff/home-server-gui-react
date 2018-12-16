'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import LightGroup from './LightGroup'
import {loadTradfriDevices, loadTradfriGroups} from '../../actions'

class Tradfri extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return (
			<div id='tradfri'>
				<h2>{this.props.title}</h2>
				{this.props.tradfriGroups.map(group => <LightGroup key={group.name} id={group.id} name={group.name} deviceIds={group.deviceIds}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	tradfriGroups: state.tradfriGroups,
	tradfriDevices: state.tradfriDevices,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => {
		dispatch(loadTradfriGroups())
		dispatch(loadTradfriDevices())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Tradfri)
export {Tradfri}
