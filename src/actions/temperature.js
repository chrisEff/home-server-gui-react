'use strict'

import homeServerApi from '@/homeServerApi'
import { setErrorMessage } from './errorMessage'
import dateFormat from 'dateformat'
import sortBy from 'lodash.sortby'

const fetchHistory = async (sensorId, min, max) => {
	return homeServerApi.getTempSensorHistory(sensorId, min, max)
}

export const loadTempSensors = () => {
	return async (dispatch) => {
		try {
			const response = await homeServerApi.getTempSensors()

			const date = new Date()
			date.setHours(0, 0, 0, 0)
			const timestampStartOfToday = Math.floor(date.getTime() / 1000)

			date.setDate(date.getDate() - 1)
			const timestampStartOfYesterday = Math.floor(date.getTime() / 1000)

			const tempSensors = await Promise.all(Object.values(response).map(async sensor => {
				const history = {}

				const historyToday     = (await fetchHistory(sensor.id, timestampStartOfToday))
				const historyYesterday = (await fetchHistory(sensor.id, timestampStartOfYesterday, timestampStartOfToday - 1))

				for (const entry of historyYesterday) {
					if (entry.time % 120 === 0) {
						const time = dateFormat(new Date(entry.time * 1000), 'HH:MM')
						history[time] = { time: time, yesterday: entry.val }
					}
				}
				for (const entry of historyToday) {
					const time = dateFormat(new Date(entry.time * 1000), 'HH:MM')
					if (!history[time]) {
						history[time] = { time }
					}
					history[time].today = entry.val
				}

				sensor.history = sortBy(Object.values(history), ['time'])
				sensor.history.push({ time: '24:00' })

				return sensor
			}))
			dispatch({ type: 'SET_TEMP_SENSORS', tempSensors })
		} catch (e) {
			dispatch(setErrorMessage('failed to load temperature sensors: ' + e.message))
		}
	}
}
