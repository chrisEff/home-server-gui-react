import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Wrapper from './components/Wrapper'

// eslint-disable-next-line import/no-webpack-loader-syntax
require('style-loader!css-loader!./style.css')

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
	<Provider store={store}>
		<Wrapper />
	</Provider>,
	document.querySelector('#wrapper')
)
