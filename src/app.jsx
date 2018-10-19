const React = require('react')
const ReactDOM = require('react-dom')

const Tradfri = require('./tradfri/Tradfri')
const RfOutlets = require('./rfOutlets/RfOutlets')
const Temperature = require('./temperature/Temperature')

require('style-loader!css-loader!./style.css')

ReactDOM.render(<Tradfri title='Licht'/>, document.querySelector('#lights'))
ReactDOM.render(<RfOutlets title='Steckdosen'/>, document.querySelector('#rfOutlets'))
ReactDOM.render(<Temperature title='Temperatur'/>, document.querySelector('#temperature'))
