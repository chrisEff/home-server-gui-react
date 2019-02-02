'use strict'

import homeServerApi from '@/homeServerApi'
import {setErrorMessage} from './errorMessage'

export const loadShutters = () => {
	return async (dispatch) => {
		try {
			const shutters = Object.values(await homeServerApi.getShutters())
			dispatch({type: 'SET_SHUTTERS', shutters})
		} catch (e) {
			dispatch(setErrorMessage('failed to load shutters: ' + e.message))
		}
	}
}
export const moveShutterUp = (id) => {
	return async (dispatch) => {
		try {
			await homeServerApi.moveShutterUp(id)
		} catch (e) {
			dispatch(setErrorMessage(`failed to move shutter #${id} up: ` + e.message))
		}
	}
}
export const moveShutterDown = (id) => {
	return async (dispatch) => {
		try {
			await homeServerApi.moveShutterDown(id)
		} catch (e) {
			dispatch(setErrorMessage(`failed to move shutter #${id} down: ` + e.message))
		}
	}
}
