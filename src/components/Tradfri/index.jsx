'use strict'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'aphrodite'

import LightGroup from './LightGroup'

import { loadGroups, loadDevices } from '@/actions/tradfri'
import theme from '@/theme'

const Tradfri = (props) => {
	useEffect(() => {
		props.onLoad()
	}, [])

	return !props.tradfriGroups ? <div/> : (
		<div className={css([theme.styles.section])}>
			<h2>{props.title}</h2>
			<div className={css([theme.styles.sectionBody])}>
				{props.tradfriGroups.map((group) =>
					<LightGroup key={group.id} id={group.id} name={group.name} deviceIds={group.deviceIds}/>,
				)}
			</div>
		</div>
	)
}

Tradfri.propTypes = {
	title: PropTypes.string.isRequired,
	tradfriGroups: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			deviceIds: PropTypes.array,
		}),
	),
}

const mapStateToProps = (state) => ({
	tradfriGroups: state.tradfriGroups,
})

const mapDispatchToProps = (dispatch) => ({
	onLoad: () => {
		dispatch(loadGroups())
		dispatch(loadDevices())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Tradfri)
export { Tradfri }
