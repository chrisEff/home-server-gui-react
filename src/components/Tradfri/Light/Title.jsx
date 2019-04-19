'use strict'

import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {setDeviceName} from '@/actions/tradfri'

const Title = ({deviceId, title, onChange}) => {
	const [editMode, setEditMode] = useState(false)
	const titleInput = useRef(title)

	if (!editMode) {
		return (
			<span className={title.length > 15 ? 'name long' : 'name'} onClick={() => setEditMode(true)}>
				{title}
			</span>
		)
	} else {
		return (
			<div>
				<input type='text' ref={titleInput} style={{width: 110}} defaultValue={title} />
				<button onClick={() => { setEditMode(false); onChange(deviceId, titleInput.current.value) }}>OK</button>
			</div>
		)
	}
}

Title.propTypes = {
	deviceId: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	onChange: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, name) => dispatch(setDeviceName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Title)
export {Title}
