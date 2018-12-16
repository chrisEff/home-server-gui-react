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

export const loadTradfriGroups = () => {
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

export const loadTradfriDevices = () => {
	return async (dispatch) => {
		try {
			const devices = await (await homeServerApi.get(`/tradfri/device`)).json()

			dispatch({type: 'SET_TRADFRI_DEVICES', devices})
		} catch (e) {
			dispatch(setErrorMessage('failed to load tradfri devices: ' + e.message))
		}
	}
}

export const setTradfriGroupName = (id, name) => {
	return async (dispatch) => {
		try {
			await homeServerApi.put(`/tradfri/group/${id}/name/${name}`)

			dispatch({type: 'SET_TRADFRI_GROUP_NAME', id, name})
		} catch (e) {
			dispatch(setErrorMessage('failed to load tradfri group name: ' + e.message))
		}
	}
}

// ### bulbs

export const setTradfriDeviceName = (id, name) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/name/${name}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_NAME', id, name})
	}
}

export const setTradfriiDeviceState = (id, state) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/state/${state}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_STATE', id, state})
	}
}

export const setTradfriiDeviceBrightness = (id, brightness) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/brightness/${brightness}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_BRIGHTNESS', id, brightness})
	}
}

export const setTradfriBulbColor = (id, color) => {
	return async (dispatch) => {
		await homeServerApi.put(`/tradfri/device/${id}/color/${color}`)
		dispatch({type: 'SET_TRADFRI_DEVICE_COLOR', id, color})
	}
}
