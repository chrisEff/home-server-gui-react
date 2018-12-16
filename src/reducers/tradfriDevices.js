const tradfriDevices = (state = [], action) => {
	switch (action.type) {
		case 'SET_TRADFRI_DEVICES':
			return action.devices
		case 'SET_TRADFRI_DEVICE_NAME':
			return state.map(device => device.id !== action.id ? device : {...device, name: action.name})
		case 'SET_TRADFRI_DEVICE_STATE':
			return state.map(device => device.id !== action.id ? device : {...device, state: action.state})
		case 'SET_TRADFRI_DEVICE_BRIGHTNESS':
			return state.map(device => device.id !== action.id ? device : {...device, brightness: action.brightness})
		case 'SET_TRADFRI_DEVICE_COLOR':
			return state.map(device => device.id !== action.id ? device : {...device, color: action.color})
		default:
			return state
	}
}

export default tradfriDevices
