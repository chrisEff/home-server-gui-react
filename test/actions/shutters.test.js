import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {loadShutters, moveShutterUp, moveShutterDown} from '@/actions/shutters'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('shutters actions', () => {
	afterEach(() => {
		fetchMock.restore()
	})

	describe('loadShutters', () => {
		it('should create SET_SHUTTERS', async () => {
			fetchMock.get('/shutters/shutter', {
				body: [{id: 0}],
			})
			const store = mockStore({shutters: []})

			await store.dispatch(loadShutters())
			expect(store.getActions()).toEqual([
				{shutters: [{id: 0}], type: 'SET_SHUTTERS'},
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.get('/shutters/shutter', 500)
			const store = mockStore({outlets: []})

			await store.dispatch(loadShutters())
			expect(store.getActions()).toEqual([{
				message: 'failed to load shutters: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})

	describe('moveShutterUp', () => {
		it('should set an error message on failure', async () => {
			fetchMock.put('/shutters/shutter/1/up', 500)
			const store = mockStore({outlets: []})

			await store.dispatch(moveShutterUp(1))
			expect(store.getActions()).toEqual([{
				message: 'failed to move shutter #1 up: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})

	describe('moveShutterDown', () => {
		it('should set an error message on failure', async () => {
			fetchMock.put('/shutters/shutter/1/down', 500)
			const store = mockStore({outlets: []})

			await store.dispatch(moveShutterDown(1))
			expect(store.getActions()).toEqual([{
				message: 'failed to move shutter #1 down: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})
})
