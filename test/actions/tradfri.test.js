import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {loadDevices, loadGroups} from '@/actions/tradfri'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('tradfri actions', () => {
	afterEach(() => {
		fetchMock.restore()
	})

	describe('loadGroups', () => {
		it('should create SET_TRADFRI_GROUPS', async () => {
			fetchMock.get('/tradfri/group', {
				body: [{id: 0}],
			})
			const store = mockStore({tradfriGroups: []})

			await store.dispatch(loadGroups())
			expect(store.getActions()).toEqual([
				{groups: [{id: 0}], type: 'SET_TRADFRI_GROUPS'},
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.get('/tradfri/group', 500)
			const store = mockStore({tradfriGroups: []})

			await store.dispatch(loadGroups())
			expect(store.getActions()).toEqual([{
				message: 'failed to load tradfri groups: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})

	describe('loadDevices', () => {
		it('should create SET_TRADFRI_DEVICES', async () => {
			fetchMock.get('/tradfri/device', {
				body: [{id: 0}],
			})
			const store = mockStore({tradfriDevices: []})

			await store.dispatch(loadDevices())
			expect(store.getActions()).toEqual([
				{devices: [{id: 0}], type: 'SET_TRADFRI_DEVICES'},
			])
		})
	})
})
