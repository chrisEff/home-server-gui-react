import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {loadOutlets, setOutletState} from '@/actions/outlets'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('outlets actions', () => {
	afterEach(() => {
		fetchMock.restore()
	})

	describe('loadOutlets', () => {
		it('should create SET_OUTLETS', async () => {
			fetchMock.get('/rfoutlets/outlet', {
				body: [{id: 1}],
			})
			const store = mockStore({outlets: []})

			await store.dispatch(loadOutlets())
			expect(store.getActions()).toEqual([
				{outlets: [{id: 1}], type: 'SET_OUTLETS'},
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.get('/rfoutlets/outlet', 500)
			const store = mockStore({outlets: []})

			await store.dispatch(loadOutlets())
			expect(store.getActions()).toEqual([{
				message: 'failed to load outlets: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})

	describe('setOutletState', () => {
		it('should create SET_OUTLET_STATE', async () => {
			fetchMock.put('/rfoutlets/outlet/1/0', {
				body: {},
			})
			const store = mockStore({outlets: []})

			await store.dispatch(setOutletState(1, 0))
			expect(store.getActions()).toEqual([{
				id: 1,
				state: 0,
				type: 'SET_OUTLET_STATE',
			}])
		})

		it('should set an error message on failure', async () => {
			fetchMock.put('/rfoutlets/outlet/1/0', 500)
			const store = mockStore({outlets: []})

			await store.dispatch(setOutletState(1, 0))
			expect(store.getActions()).toEqual([{
				message: 'failed to set state of outlet #1: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})
})
