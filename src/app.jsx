const React = require('react')
const ReactDOM = require('react-dom')

const Tradfri = require('./components/tradfri/Tradfri')
const RfOutlets = require('./components/rfOutlets/RfOutlets')
const Temperature = require('./components/temperature/Temperature')

require('style-loader!css-loader!./style.css')

ReactDOM.render(<Tradfri title='Licht'/>, document.querySelector('#lights'))
ReactDOM.render(<RfOutlets title='Steckdosen'/>, document.querySelector('#rfOutlets'))
ReactDOM.render(<Temperature title='Temperatur'/>, document.querySelector('#temperature'))
