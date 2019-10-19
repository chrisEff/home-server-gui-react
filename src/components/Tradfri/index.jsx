'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {css} from 'aphrodite'

import LightGroup from './LightGroup'

import {loadGroups, loadDevices} from '@/actions/tradfri'
import theme from '@/theme'

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
			<div className={css([theme.styles.section])}>
				<h2>{this.props.title}</h2>
				<div className={css([theme.styles.sectionBody])}>
					{this.props.tradfriGroups.map(group =>
						<LightGroup key={group.id} id={group.id} name={group.name} deviceIds={group.deviceIds}/>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	tradfriGroups: state.tradfriGroups,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => {
		dispatch(loadGroups())
		dispatch(loadDevices())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Tradfri)
export {Tradfri}
