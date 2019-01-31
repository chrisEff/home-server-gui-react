'use strict'

import homeServerApi from '@/homeServerApi'
import {setErrorMessage} from './errorMessage'

export const loadShutters = () => {
	return async (dispatch) => {
		try {
			const response = await homeServerApi.get(`/shutters/shutter`)
			const shutters = Object.values(await response.json())
			dispatch({type: 'SET_SHUTTERS', shutters})
		} catch (e) {
			dispatch(setErrorMessage('failed to load shutters: ' + e.message))
		}
	}
}
export const moveShutterUp = (id) => {
	return async (dispatch) => {
		try {
			await homeServerApi.put(`/shutters/shutter/${id}/up`)
		} catch (e) {
			dispatch(setErrorMessage(`failed to move shutter #${id} up: ` + e.message))
		}
	}
}
export const moveShutterDown = (id) => {
	return async (dispatch) => {
		try {
			await homeServerApi.put(`/shutters/shutter/${id}/down`)
		} catch (e) {
			dispatch(setErrorMessage(`failed to move shutter #${id} down: ` + e.message))
		}
	}
}
