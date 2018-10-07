const config = require('../../config')

class ColorSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bulb: props.bulb}
  }

  render() {
    const bulb = this.state.bulb
    if (bulb.bulbType === 'rgb') {
      return (
        <div className='color-switcher'>
          <div className={bulb.color === 'red'     ? 'color red active'     : 'color red'}     onClick={(e) => this.handleChange(e, 'red')}/>
          <div className={bulb.color === 'green'   ? 'color green active'   : 'color green'}   onClick={(e) => this.handleChange(e, 'green')}/>
          <div className={bulb.color === 'blue'    ? 'color blue active'    : 'color blue'}    onClick={(e) => this.handleChange(e, 'blue')}/>
          <div className={bulb.color === 'yellow'  ? 'color yellow active'  : 'color yellow'}  onClick={(e) => this.handleChange(e, 'yellow')}/>
          <div className={bulb.color === 'pink'    ? 'color pink active'    : 'color pink'}    onClick={(e) => this.handleChange(e, 'pink')}/>
          <div className={bulb.color === 'purple'  ? 'color purple active'  : 'color purple'}  onClick={(e) => this.handleChange(e, 'purple')}/>
          <div className={bulb.color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={(e) => this.handleChange(e, 'warm')}/>
          <div className={bulb.color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={(e) => this.handleChange(e, 'neutral')}/>
          <div className={bulb.color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={(e) => this.handleChange(e, 'cold')}/>
        </div>
      )
    }
    if (bulb.bulbType === 'white-spectrum') {
      return (
        <div className='color-switcher spectrum'>
          <div className={bulb.color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={(e) => this.handleChange(e, 'warm')}/>
          <div className={bulb.color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={(e) => this.handleChange(e, 'neutral')}/>
          <div className={bulb.color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={(e) => this.handleChange(e, 'cold')}/>
        </div>
      )
    }
    if (bulb.bulbType === 'white') {
      return (
        <div className='color-switcher white'>
          <div className='color neutral active' />
        </div>
      )
    }
    return <div/>
  }

  handleChange = async (e, color) => {
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

module.exports = ColorSwitcher
