'use strict'

import homeServerApi from '@/homeServerApi'
import {setErrorMessage} from './errorMessage'

export const loadGroups = () => {
	return async (dispatch) => {
		try {
			const groups = await homeServerApi.getTradfriGroups()
			groups.sort((a, b) => a.name.localeCompare(b.name))
			dispatch({type: 'SET_TRADFRI_GROUPS', groups})
		} catch (e) {
			dispatch(setErrorMessage('failed to load tradfri groups: ' + e.message))
		}
	}
}

export const loadDevices = () => {
	return async (dispatch) => {
		try {
			const devices = await homeServerApi.getTradfriDevices()
			dispatch({type: 'SET_TRADFRI_DEVICES', devices})
		} catch (e) {
			dispatch(setErrorMessage('failed to load tradfri devices: ' + e.message))
		}
	}
}

export const setGroupName = (id, name) => {
	return async (dispatch) => {
		try {
			await homeServerApi.setTradfriGroupName(id, name)
			dispatch({type: 'SET_TRADFRI_GROUP_NAME', id, name})
		} catch (e) {
			dispatch(setErrorMessage('failed to set tradfri group name: ' + e.message))
		}
	}
}

export const setDeviceName = (id, name) => {
	return async (dispatch) => {
		try {
			await homeServerApi.setTradfriDeviceName(id, name)
			dispatch({type: 'SET_TRADFRI_DEVICE_NAME', id, name})
		} catch (e) {
			dispatch(setErrorMessage('failed to set tradfri device name: ' + e.message))
		}
	}
}

export const setDeviceState = (id, state) => {
	return async (dispatch) => {
		try {
			await homeServerApi.setTradfriDeviceState(id, state)
			dispatch({type: 'SET_TRADFRI_DEVICE_STATE', id, state})
		} catch (e) {
			dispatch(setErrorMessage('failed to set tradfri device state: ' + e.message))
		}
	}
}

export const setDeviceBrightness = (id, brightness) => {
	return async (dispatch) => {
		try {
			await homeServerApi.setTradfriDeviceBrightness(id, brightness)
			dispatch({type: 'SET_TRADFRI_DEVICE_BRIGHTNESS', id, brightness})
		} catch (e) {
			dispatch(setErrorMessage('failed to set tradfri device brightness: ' + e.message))
		}
	}
}

export const setDeviceColor = (id, color) => {
	return async (dispatch) => {
		try {
			await homeServerApi.setTradfriDeviceColor(id, color)
			dispatch({type: 'SET_TRADFRI_DEVICE_COLOR', id, color})
		} catch (e) {
			dispatch(setErrorMessage('failed to set tradfri device color: ' + e.message))
		}
	}
}
