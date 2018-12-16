import {combineReducers} from 'redux'
import errorMessage from './errorMessage'
import outlets from './outlets'
import shutters from './shutters'
import tradfriGroups from './tradfriGroups'
import tradfriDevices from './tradfriDevices'

export default combineReducers({
	errorMessage,
	outlets,
	shutters,
	tradfriGroups,
	tradfriDevices,
})
