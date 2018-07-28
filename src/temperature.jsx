'use strict';

const e = React.createElement;

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
    console.log(this.state)

    return <table>
      {this.state.tempSensors.map(sensor => Temperature.renderSensor(sensor))}
    </table>
  }

  static renderSensor(sensor) {
    return <tr><td>{sensor.name}:</td> <td>{sensor.celsiusValue}°C</td></tr>
  }

}

const domContainer = document.querySelector('#temperature');
ReactDOM.render(e(Temperature), domContainer);
