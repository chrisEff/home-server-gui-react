'use strict'

import querystring from 'querystring'

const call = async (method, action, params = {}) => {
	if (!action.startsWith('/')) {
		action = '/' + action
	}

	const response = await fetch(`${api.apiUrl}${action}?${querystring.stringify(params)}`, {
		method: method,
		headers: {
			apiuser: api.apiUser,
			apikey: api.apiKey,
		},
	})
	return response.json()
}

const api = {

	apiUrl: '',
	apiUser: '',
	apiKey: '',

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
