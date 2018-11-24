const React = require('react')
const ReactDOM = require('react-dom')
const Wrapper = require('./components/Wrapper')

// eslint-disable-next-line import/no-webpack-loader-syntax
require('style-loader!css-loader!./style.css')

ReactDOM.render(<Wrapper />, document.querySelector('#wrapper'))
