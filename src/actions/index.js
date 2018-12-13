export const setOutlets = outlets => ({
	type: 'SET_OUTLETS',
	outlets,
})

export const toggleOutlet = id => ({
	type: 'TOGGLE_OUTLET',
	id,
})

export const setShutters = shutters => ({
	type: 'SET_SHUTTERS',
	shutters,
})
