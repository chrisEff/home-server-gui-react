class LightSwitch extends React.Component {
  render() {
    return <div className='bulb' onClick={() => this.props.onchange(this.props.state ? 0 : 1)}>💡</div>
  }
}

module.exports = LightSwitch
