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

module.exports = TemperatureSensor
