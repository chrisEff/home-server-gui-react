'use strict'

import React from 'react'
import PropTypes from 'prop-types'

let Switch = ({state, onchange}) =>
	<div className='bulb' onClick={() => onchange(state ? 0 : 1)}>💡</div>

Switch.propTypes = {
	state: PropTypes.number.isRequired,
	onchange: PropTypes.func,
}

export default Switch
