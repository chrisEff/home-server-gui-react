'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import { setOutletState } from '@/actions/outlets'
import theme from '@/theme'

const RfOutlet = ({ outlet, onToggle }) => {
	return (
		<div
			className={css([theme.styles.device, styles.outlet, outlet.state ? styles.on : styles.off])}
		>
			<span>{outlet.name}</span>
			<div
				className={css([styles.plug, outlet.state ? styles.plugOn : styles.plugOff])}
				onClick={() => onToggle(outlet.id, outlet.state ? 0 : 1)}
			>🔌</div>
		</div>
	)
}

RfOutlet.propTypes = {
	id: PropTypes.number,
	outlet: PropTypes.object.isRequired,
	onToggle: PropTypes.func,
}

const styles = StyleSheet.create({
	outlet: {
		height: '200px',
	},
	on: {
		color: '#eee',
	},
	off: {
		color: 'rgb(135, 147, 155)',
	},
	plug: {
		cursor: 'pointer',
		fontSize: 80,
		paddingTop: '40px',
		textAlign: 'center',
		userSelect: 'none',
	},
	plugOn: {
		filter: 'none',
		textShadow: '0 0 1px black, 0 0 50px #f5faf6',
	},
	plugOff: {
		filter: 'grayscale(100%) blur(5px)',
	},
})

const mapStateToProps = (state, ownProps) => ({
	outlet: state.outlets.find((outlet) => outlet.id === ownProps.id),
})

const mapDispatchToProps = (dispatch) => ({
	onToggle: (id, state) => dispatch(setOutletState(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlet)
export { RfOutlet }
