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

        <input className='brightness-slider'
               type='range' min='0' max='254' defaultValue={bulb.brightness}
               onMouseUp={(e) => this.handleBrightness(e, e.target.value)} />

        { bulb.bulbType === 'rgb' &&
        <div className='color-switcher'>
          <div className='color red'    onClick={(e) => this.handleColor(e, 'red')}/>
          <div className='color green'  onClick={(e) => this.handleColor(e, 'green')}/>
          <div className='color blue'   onClick={(e) => this.handleColor(e, 'blue')}/>
          <div className='color yellow' onClick={(e) => this.handleColor(e, 'yellow')}/>
          <div className='color pink'   onClick={(e) => this.handleColor(e, 'pink')}/>
          <div className='color purple' onClick={(e) => this.handleColor(e, 'purple')}/>
          <div className='color warm'    onClick={(e) => this.handleColor(e, 'warm')}/>
          <div className='color neutral' onClick={(e) => this.handleColor(e, 'neutral')}/>
          <div className='color cold'    onClick={(e) => this.handleColor(e, 'cold')}/>
        </div>}

        { bulb.bulbType === 'white-spectrum' &&
        <div className='color-switcher spectrum'>
          <div className={bulb.color === 'warm' ? 'color warm active' : 'color warm'} onClick={(e) => this.handleColor(e, 'warm')}/>
          <div className={bulb.color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={(e) => this.handleColor(e, 'neutral')}/>
          <div className={bulb.color === 'cold' ? 'color cold active' : 'color cold'} onClick={(e) => this.handleColor(e, 'cold')}/>
        </div>}

        { bulb.bulbType === 'white' &&
        <div className='color-switcher white'>
          <div className='color neutral active' />
        </div>}
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

  handleBrightness = async (e, brightness) => {
    const bulb = this.state.bulb
    await fetch(
      `${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/brightness/${brightness}?key=${config.api.key}`,
      {method: 'PUT'}
    )

    bulb.brightness = brightness
    this.setState({bulb})
  }

  handleColor = async (e, color) => {
    e.stopPropagation()
    const bulb = this.state.bulb
    await fetch(
      `${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/color/${color}?key=${config.api.key}`,
      {method: 'PUT'}
    )

    bulb.color = color
    this.setState({bulb})
  }
}

module.exports = Light
