'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setDeviceState} from '@/actions/tradfri'

let Switch = ({deviceId, state, onChange}) =>
	<div style={state ? {...styles.bulb, ...styles.on} : styles.bulb} className='bulb' onClick={() => onChange(deviceId, state ? 0 : 1)}>💡</div>


Switch.propTypes = {
	deviceId: PropTypes.number.isRequired,
	state: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

const styles = {
	bulb: {
		filter: 'grayscale(100%) blur(5px)',
		fontSize: 80,
		paddingTop: '15px',
		textAlign: 'center',
		userSelect: 'none',
	},
	on: {
		filter: 'none',
	},
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, state) => dispatch(setDeviceState(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Switch)
export {Switch}
