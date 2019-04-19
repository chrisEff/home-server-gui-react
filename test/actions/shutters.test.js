import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {loadShutters} from '@/actions/shutters'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('shutters actions', () => {
	afterEach(() => {
		fetchMock.restore()
	})

	describe('loadShutters', () => {
		it('should create SET_SHUTTERS', async () => {
			fetchMock.getOnce('/shutters/shutter', {
				body: [{id: 0}],
			})
			const store = mockStore({shutters: []})

			await store.dispatch(loadShutters())
			expect(store.getActions()).toEqual([
				{shutters: [{id: 0}], type: 'SET_SHUTTERS'},
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.getOnce('/shutters/shutter', 500)
			const store = mockStore({outlets: []})

			await store.dispatch(loadShutters())
			expect(store.getActions()).toEqual([{
				message: 'failed to load shutters: invalid json response body at /shutters/shutter reason: Unexpected end of JSON input',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})
})
