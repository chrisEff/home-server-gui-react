'use strict'

import homeServerApi from '../homeServerApi'
import {setErrorMessage} from './errorMessage'

export const loadGroups = () => {
	return async (dispatch) => {
		try {
			const groups = await (await homeServerApi.get(`/tradfri/group`)).json()
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
			const devices = await (await homeServerApi.get(`/tradfri/device`)).json()

			dispatch({type: 'SET_TRADFRI_DEVICES', devices})
		} catch (e) {
			dispatch(setErrorMessage('failed to load tradfri devices: ' + e.message))
		}
	}
}
export const setGroupName = (id, name) => {
	return async (dispatch) => {
		try {
			await homeServerApi.put(`/tradfri/group/${id}/name/${name}`)

			dispatch({type: 'SET_TRADFRI_GROUP_NAME', id, name})
		} catch (e) {
			dispatch(setErrorMessage('failed to load tradfri group name: ' + e.message))
		}
	}
}
export const setDeviceName = (id, name) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/name/${name}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_NAME', id, name})
	}
}
export const setDeviceState = (id, state) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/state/${state}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_STATE', id, state})
	}
}
export const setDeviceBrightness = (id, brightness) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/brightness/${brightness}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_BRIGHTNESS', id, brightness})
	}
}
export const setBulbColor = (id, color) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/color/${color}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_COLOR', id, color})
	}
}