'use strict'

import homeServerApi from '../homeServerApi'
import {setErrorMessage} from './errorMessage'

export const loadOutlets = () => {
	return async (dispatch) => {
		try {
			const response = await homeServerApi.get(`/rfoutlets/outlet`)
			const outlets = Object.values(await response.json())
			dispatch({type: 'SET_OUTLETS', outlets})
		} catch (e) {
			dispatch(setErrorMessage('failed to load outlets: ' + e.message))
		}
	}
}
export const setOutletState = (id, state) => {
	return async (dispatch) => {
		try {
			await homeServerApi.put(`/rfoutlets/outlet/${id}/${state}`)
			dispatch({type: 'SET_OUTLET_STATE', id, state})
		} catch (e) {
			dispatch(setErrorMessage(`failed to set state of outlet #${id}: ` + e.message))
		}
	}
}
