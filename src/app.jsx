import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import Wrapper from './components/Wrapper'

// eslint-disable-next-line import/no-webpack-loader-syntax
require('style-loader!css-loader!./style.css')

const store = createStore(rootReducer)

render(
	<Provider store={store}>
		<Wrapper />
	</Provider>,
	document.querySelector('#wrapper')
)
