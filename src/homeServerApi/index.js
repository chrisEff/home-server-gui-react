'use strict'

import querystring from 'querystring'

const call = async (method, action, params = {}) => {
	if (!action.startsWith('/')) {
		action = '/' + action
	}

	const url = `${api.apiUrl}${action}?${querystring.stringify(params)}`
	console.log('fetching URL:', url)

	const response = await fetch(url, {
		method: method,
		headers: {
			apiuser: api.apiUser,
			apikey: api.apiKey,
		},
	})
	if (response.status >= 400) {
		throw new Error(`API responded with ${response.status} ${response.statusText}`)
	}
	return response.json()
}

const api = {

	apiUrl: '',
	apiUser: '',
	apiKey: '',

	setApiUrl: (apiUrl) => {
		api.apiUrl = (apiUrl && apiUrl.endsWith('/')) ? apiUrl.slice(0, -1) : apiUrl
	},

	get: async (action, params = {}) => call('GET', action, params),
	post: async (action, params = {}) => call('POST', action, params),
	put: async (action, params = {}) => call('PUT', action, params),
	delete: async (action, params = {}) => call('DELETE', action, params),

	getOutlets: async () => api.get('/rfoutlets/outlet'),
	setOutletState: async (id, state) => api.put(`/rfoutlets/outlet/${id}/${state}`),

	getShutters: async () => api.get('/shutters/shutter'),
	moveShutterUp: async (id) => api.put(`/shutters/shutter/${id}/up`),
	moveShutterDown: async (id) => api.put(`/shutters/shutter/${id}/down`),

	getTempSensors: async () => api.get('/tempSensors/'),
	getTempSensorHistory: async (id, min, max) => api.get(`/tempSensors/${id}/history`, {min, max}),

	getTradfriGroups: async () => api.get('/tradfri/group'),
	getTradfriDevices: async () => api.get('/tradfri/device'),
	setTradfriGroupName: async (id, name) => api.put(`/tradfri/group/${id}/name/${name}`),
	setTradfriDeviceName: async (id, name) => api.put(`/tradfri/device/${id}/name/${name}`),
	setTradfriDeviceState: async (id, state) => api.put(`/tradfri/device/${id}/state/${state}`),

	setTradfriDeviceBrightness: async (id, brightness) => api.put(`/tradfri/device/${id}/brightness/${brightness}`),
	setTradfriDeviceColor: async (id, color) => api.put(`/tradfri/device/${id}/color/${color}`),
}

export default api
