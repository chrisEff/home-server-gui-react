const React = require('react')
const ReactDOM = require('react-dom')
const Wrapper = require('./components/Wrapper')

require('style-loader!css-loader!./style.css')

ReactDOM.render(<Wrapper />, document.querySelector('#wrapper'))
