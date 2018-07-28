'use strict';

const e = React.createElement;

class Lights extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    if (!this.state.bulbs) {
      return <div/>
    }
    console.log(this.state)

    return (
      <div>
        {this.state.bulbs.map(bulb => {
          return Lights.renderLight(bulb.name, !!bulb.state)
        })}
      </div>
    )
  }

  static renderLight(name, state) {
    const className = state ? 'light on' : 'light'
    return <div className={className}>{name}</div>
  }

}

const domContainer = document.querySelector('#lights');
ReactDOM.render(e(Lights), domContainer);
