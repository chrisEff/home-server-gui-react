const outlets = (state = [], action) => {
	switch (action.type) {
		case 'SET_OUTLETS':
			return action.outlets
		case 'SET_OUTLET_STATE':
			return state.map(outlet => {
				if (outlet.id !== action.id) {
					return outlet
				}
				return {
					...outlet,
					state: action.state,
				}
			})
		default:
			return state
	}
}

export default outlets
