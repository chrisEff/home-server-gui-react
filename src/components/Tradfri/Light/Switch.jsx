'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setTradfriiDeviceState} from '../../../actions'

let Switch = ({deviceId, state, onChange}) =>
	<div className='bulb' onClick={() => onChange(deviceId, state ? 0 : 1)}>💡</div>

Switch.propTypes = {
	deviceId: PropTypes.number.isRequired,
	state: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, state) => dispatch(setTradfriiDeviceState(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Switch)
export {Switch}
