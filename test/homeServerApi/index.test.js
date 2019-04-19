'use strict'

import homeServerApi from '@/homeServerApi'

describe('homeServerApi', () => {
	beforeEach(() => {
		homeServerApi.get = jest.fn()
		homeServerApi.post = jest.fn()
		homeServerApi.put = jest.fn()
		homeServerApi.delete = jest.fn()
	})

	it('getOutlets should make a GET request', () => {
		homeServerApi.getOutlets()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('setOutletState should make a PUT request', () => {
		homeServerApi.setOutletState(1, 0)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('getShutters should make a GET request', () => {
		homeServerApi.getShutters()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('moveShutterUp should make a PUT request', () => {
		homeServerApi.moveShutterUp(1)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('moveShutterDown should make a PUT request', () => {
		homeServerApi.moveShutterDown(1)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('getTempSensors should make a GET request', () => {
		homeServerApi.getTempSensors()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('getTradfriGroups should make a GET request', () => {
		homeServerApi.getTradfriGroups()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('getTradfriDevices should make a GET request', () => {
		homeServerApi.getTradfriDevices()
		expect(homeServerApi.get.mock.calls.length).toBe(1)
	})

	it('setTradfriGroupName should make a PUT request', () => {
		homeServerApi.setTradfriGroupName(1, 'test')
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceName should make a PUT request', () => {
		homeServerApi.setTradfriDeviceName(1, 'test')
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceState should make a PUT request', () => {
		homeServerApi.setTradfriDeviceState(1, 0)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceBrightness should make a PUT request', () => {
		homeServerApi.setTradfriDeviceBrightness(1, 254)
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

	it('setTradfriDeviceColor should make a PUT request', () => {
		homeServerApi.setTradfriDeviceColor(1, 'blue')
		expect(homeServerApi.put.mock.calls.length).toBe(1)
	})

})
