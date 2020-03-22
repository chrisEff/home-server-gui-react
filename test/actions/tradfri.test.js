'use strict'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { loadDevices, loadGroups, setGroupName, setDeviceName, setDeviceState, setDeviceBrightness, setDeviceColor } from '@/actions/tradfri'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('tradfri actions', () => {
	let store

	beforeEach(() => {
		store = mockStore({
			tradfriGroups: [],
			tradfriDevices: [],
		})
	})

	afterEach(() => {
		fetchMock.restore()
	})

	describe('loadGroups', () => {
		it('should create SET_TRADFRI_GROUPS', async () => {
			fetchMock.get('/tradfri/group', {
				body: [{ id: 1 }],
			})

			await store.dispatch(loadGroups())
			expect(store.getActions()).toEqual([
				{ groups: [{ id: 1 }], type: 'SET_TRADFRI_GROUPS' },
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.get('/tradfri/group', 500)

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
				body: [{ id: 1 }],
			})

			await store.dispatch(loadDevices())
			expect(store.getActions()).toEqual([
				{ devices: [{ id: 1 }], type: 'SET_TRADFRI_DEVICES' },
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.get('/tradfri/device', 500)

			await store.dispatch(loadDevices())
			expect(store.getActions()).toEqual([{
				message: 'failed to load tradfri devices: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})

	describe('setGroupName', () => {
		it('should create SET_TRADFRI_GROUP_NAME', async () => {
			fetchMock.put('/tradfri/group/1/name/test', { status: 200, body: {} })

			await store.dispatch(setGroupName(1, 'test'))
			expect(store.getActions()).toEqual([
				{ id: 1, name: 'test', type: 'SET_TRADFRI_GROUP_NAME' },
			])
		})

		it('should set an error message on failure', async () => {
			fetchMock.put('/tradfri/group/1/name/test', 500)

			await store.dispatch(setGroupName(1, 'test'))
			expect(store.getActions()).toEqual([{
				message: 'failed to set tradfri group name: API responded with 500 Internal Server Error',
				type: 'SET_ERROR_MESSAGE',
			}])
		})
	})

	describe('setDeviceName', () => {
		it('should create SET_TRADFRI_DEVICE_NAME', async () => {
			fetchMock.put('/tradfri/device/1/name/test', { status: 200, body: {} })

			await store.dispatch(setDeviceName(1, 'test'))
			expect(store.getActions()).toEqual([
				{ id: 1, name: 'test', type: 'SET_TRADFRI_DEVICE_NAME' },
			])
		})
	})

	describe('setDeviceState', () => {
		it('should create SET_TRADFRI_DEVICE_STATE', async () => {
			fetchMock.put('/tradfri/device/1/state/1', { status: 200, body: {} })

			await store.dispatch(setDeviceState(1, 1))
			expect(store.getActions()).toEqual([
				{ id: 1, state: 1, type: 'SET_TRADFRI_DEVICE_STATE' },
			])
		})
	})

	describe('setDeviceBrightness', () => {
		it('should create SET_TRADFRI_DEVICE_BRIGHTNESS', async () => {
			fetchMock.put('/tradfri/device/1/brightness/254', { status: 200, body: {} })

			await store.dispatch(setDeviceBrightness(1, 254))
			expect(store.getActions()).toEqual([
				{ id: 1, brightness: 254, type: 'SET_TRADFRI_DEVICE_BRIGHTNESS' },
			])
		})
	})

	describe('setDeviceColor', () => {
		it('should create SET_TRADFRI_DEVICE_COLOR', async () => {
			fetchMock.put('/tradfri/device/1/color/blue', { status: 200, body: {} })

			await store.dispatch(setDeviceColor(1, 'blue'))
			expect(store.getActions()).toEqual([
				{ id: 1, color: 'blue', type: 'SET_TRADFRI_DEVICE_COLOR' },
			])
		})
	})
})
