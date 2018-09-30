'use strict';

class Lights extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bulbs: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device?key=${config.api.key}`)
    const devices = Object.values(await response.json())
    this.setState({
      bulbs: devices
        .filter(d => d.type === 'bulb')
        .sort((a, b) => {
          return a.name > b.name ? 1 : b.name < a.name ? -1 : 0;
        }),
      remotes: devices.filter(d => d.type === 'remote')
    })
  }

  render() {
    return (
      <div>
        <h2>Licht</h2>
        {this.state.bulbs.map(bulb => <Light key={bulb.name} bulb={bulb} />)}
      </div>
    )
  }
}

class Light extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bulb: props.bulb}
  }
  

  render() {
    const bulb = this.state.bulb;
    const className = bulb.state ? 'light on' : 'light'
    return (
      <div className={className} onClick={this.handleClick}>
        {bulb.name}
        <div className='bulb'>💡</div>
        { bulb.bulbType === 'rgb' &&
        <div className='color-switcher'>
          <div className='color red'    onClick={(e) => this.handleColor(e, 'red')}></div>
          <div className='color green'  onClick={(e) => this.handleColor(e, 'green')}></div>
          <div className='color blue'   onClick={(e) => this.handleColor(e, 'blue')}></div>
          <div className='color yellow' onClick={(e) => this.handleColor(e, 'yellow')}></div>
          <div className='color pink'   onClick={(e) => this.handleColor(e, 'pink')}></div>
          <div className='color purple' onClick={(e) => this.handleColor(e, 'purple')}></div>
          <div className='color warm'    onClick={(e) => this.handleColor(e, 'warm')}></div>
          <div className='color neutral' onClick={(e) => this.handleColor(e, 'neutral')}></div>
          <div className='color cold'    onClick={(e) => this.handleColor(e, 'cold')}></div>
        </div>}

        { bulb.bulbType === 'white-spectrum' &&
        <div className='color-switcher'>
          <div className='color warm'    onClick={(e) => this.handleColor(e, 'warm')}></div>
          <div className='color neutral' onClick={(e) => this.handleColor(e, 'neutral')}></div>
          <div className='color cold'    onClick={(e) => this.handleColor(e, 'cold')}></div>
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

  handleColor = async (e, color) => {
    e.stopPropagation()
    const bulb = this.state.bulb
    await fetch(
      `${config.api.protocol}://${config.api.host}:${config.api.port}/tradfri/device/${bulb.id}/color/${color}?key=${config.api.key}`,
      {method: 'PUT'}
    )
  }
}


ReactDOM.render(<Lights/>, document.querySelector('#lights'));
