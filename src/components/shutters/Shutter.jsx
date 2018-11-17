const homeServerApi = require('../../homeServerApi')

const React = require('react')
const PropTypes = require('prop-types')

class Shutter extends React.Component {

	static propTypes = {
		shutter: PropTypes.object.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {shutter: props.shutter}
	}


	render () {
		return (
			<div className='shutter'>
				<h4>{this.state.shutter.name}</h4>
				<br/>
				<span className='button' onClick={this.handleUpClick}>⬆️</span> &nbsp;
				<span className='button' onClick={this.handleDownClick}>⬇️</span>
			</div>
		)
	}

	handleUpClick = async () => {
		await homeServerApi.put(`/shutters/shutter/${this.props.shutter.id}/up`)
	}

	handleDownClick = async () => {
		await homeServerApi.put(`/shutters/shutter/${this.props.shutter.id}/down`)
	}
}

module.exports = Shutter
