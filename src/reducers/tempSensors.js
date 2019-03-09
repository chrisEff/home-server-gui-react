const tempSensors = (state = [], action) => {
	switch (action.type) {
		case 'SET_TEMP_SENSORS':
			return action.tempSensors
		default:
			return state
	}
}

export default tempSensors
