const tradfriGroups = (state = [], action) => {
	switch (action.type) {
		case 'SET_TRADFRI_GROUPS':
			return action.groups
		default:
			return state
	}
}

export default tradfriGroups
