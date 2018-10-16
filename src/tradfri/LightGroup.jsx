const Light = require('./Light')

class LightGroup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {group: props.group}
	}

	render() {
		return (
			<div className='lightGroup'>
				<h3>{this.state.group.name}</h3>
				{
					this.state.group.devices
						.filter(device => device.type === 'bulb')
						.map(device => <Light key={device.name} bulb={device}/>)
				}
			</div>
		)
	}
}

module.exports = LightGroup
