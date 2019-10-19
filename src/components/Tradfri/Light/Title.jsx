'use strict'

import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import {setDeviceName} from '@/actions/tradfri'

const Title = ({deviceId, title, onChange}) => {
	const [editMode, setEditMode] = useState(false)
	const titleInput = useRef(title)

	if (!editMode) {
		return (
			<span className={
				css(title.length > 15 ? [styles.title, styles.long] : [styles.title])
			} onClick={() => setEditMode(true)}>
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

const styles = StyleSheet.create({
	title: {
		':hover': {
			':after': {
				content: "' ✏️'",
				fontSize: '0.9em',
			},
		},
		display: 'block',
		height: '1.6em',
	},
	long: {
		fontSize: '0.8em',
		height: '2em',
	},
})

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, name) => dispatch(setDeviceName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Title)
export {Title}
