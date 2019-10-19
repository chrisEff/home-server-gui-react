'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import {moveShutterUp, moveShutterDown} from '@/actions/shutters'
import theme from '@/theme'

const Shutter = ({shutter, onUp, onDown}) => {
	return (
		<div className={css([theme.styles.device, styles.shutter])}>
			<span>{shutter.name}</span>
			<br/><br/>
			<span className={css([styles.button])} onClick={() => onUp(shutter.id)}>⬆️</span><br/>
			<span className={css([styles.button])} onClick={() => onDown(shutter.id)}>⬇️</span>
		</div>
	)
}

Shutter.propTypes = {
	id: PropTypes.number,
	shutter: PropTypes.object.isRequired,
	onUp: PropTypes.func,
	onDown: PropTypes.func,
}

const styles = StyleSheet.create({
	shutter: {
		height: '200px',
	},
	button: {
		cursor: 'pointer',
		fontSize: '60px',
		userSelect: 'none',
	},
})

const mapStateToProps = (state, ownProps) => ({
	shutter: state.shutters.find(shutter => shutter.id === ownProps.id),
})

const mapDispatchToProps = dispatch => ({
	onUp: (id, state) => dispatch(moveShutterUp(id, state)),
	onDown: (id, state) => dispatch(moveShutterDown(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shutter)
export {Shutter}
