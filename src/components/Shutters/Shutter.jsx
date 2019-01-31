'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {moveShutterUp, moveShutterDown} from '@/actions/shutters'

const Shutter = ({shutter, onUp, onDown}) => {
	return (
		<div className='shutter'>
			<h4>{shutter.name}</h4>
			<br/>
			<span className='button' onClick={() => onUp(shutter.id)}>⬆️</span><br/>
			<span className='button' onClick={() => onDown(shutter.id)}>⬇️</span>
		</div>
	)
}

Shutter.propTypes = {
	id: PropTypes.number,
	shutter: PropTypes.object.isRequired,
	onUp: PropTypes.func,
	onDown: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
	shutter: state.shutters.find(shutter => shutter.id === ownProps.id),
})

const mapDispatchToProps = dispatch => ({
	onUp: (id, state) => dispatch(moveShutterUp(id, state)),
	onDown: (id, state) => dispatch(moveShutterDown(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shutter)
export {Shutter}
