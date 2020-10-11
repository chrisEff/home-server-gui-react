'use strict'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'aphrodite'

import RfOutlet from './RfOutlet'

import { loadOutlets } from '@/actions/outlets'
import theme from '@/theme'

const RfOutlets = (props) => {
	useEffect(() => {
		props.onLoad()
	}, [])

	return !props.outlets ? <div/> : (
		<div className={css([theme.styles.section])}>
			<h2>{props.title}</h2>
			<div className={css([theme.styles.sectionBody])}>
				{props.outlets.map((outlet) =>
					<RfOutlet key={outlet.id} id={outlet.id}/>,
				)}
			</div>
		</div>
	)
}

RfOutlets.propTypes = {
	title: PropTypes.string.isRequired,
	outlets: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		}),
	),
}

const mapStateToProps = (state) => ({
	outlets: state.outlets,
})

const mapDispatchToProps = (dispatch) => ({
	onLoad: () => dispatch(loadOutlets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlets)
