'use strict';

const config = require('../../config')
const LightGroup = require('./LightGroup')

class Tradfri extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  async componentDidMount() {
    const groups = await (await fetch(`${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/group?key=${config.api.key}`)).json()
    const devices = await (await fetch(`${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device?key=${config.api.key}`)).json()
    
    groups.forEach(group => {
      group.devices = []
      group.deviceIds.forEach(deviceId => {
        const device = devices.find(device => device.id === deviceId)
        group.devices.push(device)
      })
      group.devices.sort((a, b) => {
        return a.name > b.name ? 1 : b.name < a.name ? -1 : 0;
      })
    })
    groups.sort((a, b) => {
      return a.name > b.name ? 1 : b.name < a.name ? -1 : 0;
    })
    
    this.setState({
      groups
    })
  }

  render() {
    return (
      <div>
        <h2>Licht</h2>
        {this.state.groups.map(group => <LightGroup key={group.name} group={group} />)}
      </div>
    )
  }
}

module.exports = Tradfri
