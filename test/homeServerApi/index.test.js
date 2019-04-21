'use strict'

import homeServerApi from '@/homeServerApi'

describe('homeServerApi', () => {
	beforeEach(() => {
		homeServerApi.get = jest.fn()
		homeServerApi.post = jest.fn()
		homeServerApi.put = jest.fn()
		homeServerApi.delete = jest.fn()
	})

	it('getOutlets should make a GET request', async () => {
		await homeServerApi.getOutlets()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('setOutletState should make a PUT request', async () => {
		await homeServerApi.setOutletState(1, 0)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('getShutters should make a GET request', async () => {
		await homeServerApi.getShutters()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('moveShutterUp should make a PUT request', async () => {
		await homeServerApi.moveShutterUp(1)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('moveShutterDown should make a PUT request', async () => {
		await homeServerApi.moveShutterDown(1)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('getTempSensors should make a GET request', async () => {
		await homeServerApi.getTempSensors()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('getTradfriGroups should make a GET request', async () => {
		await homeServerApi.getTradfriGroups()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('getTradfriDevices should make a GET request', async () => {
		await homeServerApi.getTradfriDevices()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('setTradfriGroupName should make a PUT request', async () => {
		await homeServerApi.setTradfriGroupName(1, 'test')
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceName should make a PUT request', async () => {
		await homeServerApi.setTradfriDeviceName(1, 'test')
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceState should make a PUT request', async () => {
		await homeServerApi.setTradfriDeviceState(1, 0)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceBrightness should make a PUT request', async () => {
		await homeServerApi.setTradfriDeviceBrightness(1, 254)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceColor should make a PUT request', async () => {
		await homeServerApi.setTradfriDeviceColor(1, 'blue')
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

})
