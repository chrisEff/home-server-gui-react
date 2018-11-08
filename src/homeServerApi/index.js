'use strict'

const querystring = require('querystring')

const api = require('../../config').api

const call = async (method, action, params = {}) => {
	params['key'] = api.key

	if (!action.startsWith('/')) {
		action = '/' + action
	}

	return fetch(`${api.url}${action}?${querystring.stringify(params)}`, { method: method })
}

module.exports = {

	get: async (action, params = {}) => call('GET', action, params),

	post: async (action, params = {}) => call('POST', action, params),

	put: async (action, params = {}) => call('PUT', action, params),

	delete: async (action, params = {}) => call('DELETE', action, params),

}
