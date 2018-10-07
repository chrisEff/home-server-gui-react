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
      <div className={className}>
        {bulb.name}
        <div className='bulb' onClick={this.handleClick}>💡</div>

        <BrightnessSlider bulb={bulb} />
        <ColorSwitcher bulb={bulb} />
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
}

module.exports = Light
