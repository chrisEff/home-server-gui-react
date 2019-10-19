'use strict'

import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import Light from './Light'
import {setGroupName} from '@/actions/tradfri'

const LightGroup = ({id, name, devices, onSaveName}) => {
	const [editMode, setEditMode] = useState(false)
	const nameInput = useRef(name)

	return (
		<div className={css([styles.lightGroup])}>
			{!editMode && <h3  className={css([styles.name])} onClick={() => { setEditMode(true) }}>{name}</h3>}
			{editMode && <div>
				<input ref={nameInput} defaultValue={name} />
				<button onClick={() => { setEditMode(false); onSaveName(id, nameInput.current.value) }}>OK</button>
			</div>}

			{
				devices
					.filter(device => device.type === 'bulb')
					.sort((a, b) => a.name.localeCompare(b.name))
					.map(device => <Light key={device.name} id={device.id} />)
			}
		</div>
	)
}

LightGroup.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	devices: PropTypes.array.isRequired,
	onSaveName: PropTypes.func,
}

const styles = StyleSheet.create({
	lightGroup: {
		display: 'inline-block',
	},
	name: {
		':hover': {
			':after': {
				content: "' ✏️'",
				fontSize: '0.9em',
			},
		},
	},
})

const mapStateToProps = (state, ownProps) => ({
	devices: state.tradfriDevices.filter(device => ownProps.deviceIds.includes(device.id)),
})

const mapDispatchToProps = dispatch => ({
	onSaveName: (id, name) => dispatch(setGroupName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LightGroup)
export {LightGroup}
