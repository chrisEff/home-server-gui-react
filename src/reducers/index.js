import {combineReducers} from 'redux'
import errorMessage from './errorMessage'
import outlets from './outlets'
import shutters from './shutters'

export default combineReducers({
	errorMessage,
	outlets,
	shutters,
})
