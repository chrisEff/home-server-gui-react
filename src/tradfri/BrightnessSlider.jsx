class BrightnessSlider extends React.Component {
  render() {
    return <input className='brightness-slider'
                  type='range' min='0' max='254' defaultValue={this.props.brightness}
                  onMouseUp={(e) => this.props.onchange(e.target.value)} />
  }
}

module.exports = BrightnessSlider
