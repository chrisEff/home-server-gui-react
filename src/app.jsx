import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Wrapper from './components/Wrapper'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	/* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
)

render(
	<Provider store={store}>
		<Wrapper />
	</Provider>,
	document.querySelector('#app'),
)
