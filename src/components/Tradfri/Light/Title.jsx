'use strict'

import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import {setDeviceName} from '@/actions/tradfri'
import theme from '@/theme'

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
				<div className={css([theme.styles.button, styles.button])} onClick={() => { setEditMode(false); onChange(deviceId, titleInput.current.value) }}>OK</div>
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
		cursor: 'pointer',
		display: 'block',
		height: '1.6em',
		userSelect: 'none',
	},
	long: {
		fontSize: '0.8em',
		height: '2em',
	},
	button: {
		backgroundColor: 'rgb(49, 51, 53)',
		fontSize: '0.9em',
		padding: '4px 10px',
		marginTop: '2px',
	},
})

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, name) => dispatch(setDeviceName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Title)
export {Title}
