import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './components/Wrapper'

// eslint-disable-next-line import/no-webpack-loader-syntax
require('style-loader!css-loader!./style.css')

ReactDOM.render(<Wrapper />, document.querySelector('#wrapper'))
