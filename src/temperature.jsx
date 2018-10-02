'use strict';

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
            {this.state.tempSensors.map(sensor => <TemperatureSensor key={sensor.id} sensor={sensor}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

class TemperatureSensor extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td>{this.props.sensor.name}:</td>
        <td>{this.props.sensor.celsiusValue}°C</td>
      </tr>
    )
  }
}

ReactDOM.render(<Temperature/>, document.querySelector('#temperature'));
