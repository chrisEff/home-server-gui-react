const config = require('../../config')

const BrightnessSlider = require('./BrightnessSlider')
const ColorSwitcher = require('./ColorSwitcher')

class Light extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bulb: props.bulb}
  }

  render() {
    const bulb = this.state.bulb;
    const className = bulb.state ? 'light on' : 'light'
    return (
      <div className={className + ' ' + bulb.color}>
        {bulb.name}
        <div className='bulb' onClick={this.handleClick}>💡</div>

        <BrightnessSlider bulb={bulb} onchange={this.updateBrightness} />
        <ColorSwitcher bulb={bulb} onchange={this.updateColor} />
      </div>
    )
  }

  handleClick = async () => {
    const bulb = this.state.bulb
    await fetch(
      `${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/state/${bulb.state ? 0 : 1}?key=${config.api.key}`,
      {method: 'PUT'}
    )

    bulb.state = bulb.state ? 0 : 1
    this.setState({bulb})
  }

  updateBrightness = (value) => {
    this.state.bulb.brightness = value
    this.setState({bulb: this.state.bulb})
  }

  updateColor = (value) => {
    this.state.bulb.color = value
    this.setState({bulb: this.state.bulb})
  }
}

module.exports = Light
