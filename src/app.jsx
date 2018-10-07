const Tradfri = require('./tradfri/Tradfri')
const RfOutlets = require('./rfOutlets/RfOutlets')
const Temperature = require('./temperature/Temperature')

ReactDOM.render(<Tradfri/>, document.querySelector('#lights'));
ReactDOM.render(<RfOutlets/>, document.querySelector('#rfOutlets'));
ReactDOM.render(<Temperature/>, document.querySelector('#temperature'));
