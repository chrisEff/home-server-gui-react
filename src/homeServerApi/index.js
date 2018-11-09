'use strict'

const querystring = require('querystring')

const call = async (method, action, params = {}) => {
	params['key'] = module.exports.apiKey

	if (!action.startsWith('/')) {
		action = '/' + action
	}

	return fetch(`${module.exports.apiUrl}${action}?${querystring.stringify(params)}`, { method: method })
}

module.exports = {

	apiUrl: '',

	apiKey: '',

	get: async (action, params = {}) => call('GET', action, params),

	post: async (action, params = {}) => call('POST', action, params),

	put: async (action, params = {}) => call('PUT', action, params),

	delete: async (action, params = {}) => call('DELETE', action, params),

}
