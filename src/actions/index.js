import homeServerApi from '../homeServerApi'

export const setErrorMessage = (message) => ({type: 'SET_ERROR_MESSAGE', message})

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
