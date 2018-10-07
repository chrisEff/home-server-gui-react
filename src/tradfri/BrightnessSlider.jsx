class BrightnessSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bulb: props.bulb}
  }

  render() {
    const bulb = this.state.bulb;
    return <input className='brightness-slider'
                  type='range' min='0' max='254' defaultValue={bulb.brightness}
                  onMouseUp={(e) => this.handleChange(e, e.target.value)} />
  }

  handleChange = async (e, brightness) => {
    const bulb = this.state.bulb
    await fetch(
      `${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/brightness/${brightness}?key=${config.api.key}`,
      {method: 'PUT'}
    )

    bulb.brightness = brightness
    this.setState({bulb})
  }
}

module.exports = BrightnessSlider
