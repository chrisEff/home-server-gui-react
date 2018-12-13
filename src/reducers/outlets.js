const outlets = (state = [], action) => {
	switch (action.type) {
		case 'SET_OUTLETS':
			return action.outlets
		case 'TOGGLE_OUTLET':
			return state.map(outlet => {
				if (outlet.id !== action.id) {
					return outlet
				}
				return {
					...outlet,
					state: outlet.state ? 0 : 1,
				}
			})
		default:
			return state
	}
}

export default outlets
