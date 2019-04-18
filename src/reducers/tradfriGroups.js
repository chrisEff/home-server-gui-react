const tradfriGroups = (state = [], action) => {
	switch (action.type) {
		case 'SET_TRADFRI_GROUPS':
			return action.groups
		case 'SET_TRADFRI_GROUP_NAME':
			return state.map(group => group.id !== action.id ? group : {...group, name: action.name})
		default:
			return state
	}
}

export default tradfriGroups
