'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import LightGroup from './LightGroup'

import {loadGroups, loadDevices} from '@/actions/tradfri'

class Tradfri extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		tradfriGroups: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				deviceIds: PropTypes.array,
			})
		),
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return !this.props.tradfriGroups ? <div/> : (
			<div id='tradfri'>
				<h2>{this.props.title}</h2>
				{this.props.tradfriGroups.map(group =>
					<LightGroup key={group.name} id={group.id} name={group.name} deviceIds={group.deviceIds}/>
				)}
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
		dispatch(loadGroups())
		dispatch(loadDevices())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Tradfri)
export {Tradfri}
