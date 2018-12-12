'use strict'

const querystring = require('querystring')

const call = async (method, action, params = {}) => {
	if (!action.startsWith('/')) {
		action = '/' + action
	}

	return fetch(`${api.apiUrl}${action}?${querystring.stringify(params)}`, {
		method: method,
		headers: {
			apiuser: api.apiUser,
			apikey: api.apiKey,
		},
	})
}

const api = {

	apiUrl: '',

	apiUser: '',

	apiKey: '',

	get: async (action, params = {}) => call('GET', action, params),

	post: async (action, params = {}) => call('POST', action, params),

	put: async (action, params = {}) => call('PUT', action, params),

	delete: async (action, params = {}) => call('DELETE', action, params),

}

export default api
