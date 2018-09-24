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
    const className = this.state.bulb.state ? 'light on' : 'light'
    return (
      <div className={className} onClick={this.handleClick}>
        {this.state.bulb.name}
        <div className='bulb'>💡</div>
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


ReactDOM.render(<Lights/>, document.querySelector('#lights'));
