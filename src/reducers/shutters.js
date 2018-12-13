const shutters = (state = [], action) => {
	switch (action.type) {
		case 'SET_SHUTTERS':
			return action.shutters
		default:
			return state
	}
}

export default shutters
