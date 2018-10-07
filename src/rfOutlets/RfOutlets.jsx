'use strict';
const config = require('../../config')

const RfOutlet = require('./RfOutlet')

class RfOutlets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outlets: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`${config.api.protocol}://${config.api.host}:${config.api.port}/rfoutlets/outlet?key=${config.api.key}`)
    const outlets = Object.values(await response.json())
    this.setState({
      outlets
    })
  }
  
  render() {
    return (
      <div>
        <h2>Steckdosen</h2>
        {this.state.outlets.map(outlet => <RfOutlet key={outlet.name} outlet={outlet} />)}
      </div>
    )
  }
}

module.exports = RfOutlets
