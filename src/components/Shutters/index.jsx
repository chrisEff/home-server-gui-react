'use strict'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'aphrodite'

import Shutter from './Shutter'

import { loadShutters } from '@/actions/shutters'
import theme from '@/theme'

const Shutters = (props) => {
	useEffect(() => {
		props.onLoad()
	}, [])

	return !props.shutters ? <div/> : (
		<div className={css([theme.styles.section])}>
			<h2>{props.title}</h2>
			<div className={css([theme.styles.sectionBody])}>
				{props.shutters.map((shutter) =>
					<Shutter key={shutter.id} id={shutter.id}/>,
				)}
			</div>
		</div>
	)
}

Shutters.propTypes = {
	title: PropTypes.string.isRequired,
	shutters: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		}),
	),
}

const mapStateToProps = (state) => ({
	shutters: state.shutters,
})

const mapDispatchToProps = (dispatch) => ({
	onLoad: () => dispatch(loadShutters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shutters)
