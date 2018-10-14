'use strict';
const config = require('../../config')

const TemperatureSensor = require('./TemperatureSensor')

class Temperature extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    const response = await fetch(`${config.api.protocol}://${config.api.host}:${config.api.port}/tempSensors/?key=${config.api.key}`)
    const tempSensors = Object.values(await response.json())
    this.setState({
      tempSensors
    })
  }

  render() {
    if (!this.state.tempSensors) {
      return <div/>
    }

    return (
      <div>
        <h2>Temperatur</h2>
        <table>
          <tbody>
            {this.state.tempSensors.map(sensor => <TemperatureSensor key={sensor.id} name={sensor.name} value={sensor.celsiusValue}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Temperature
