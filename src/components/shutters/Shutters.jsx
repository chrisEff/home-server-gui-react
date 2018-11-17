'use strict'

const homeServerApi = require('../../homeServerApi')

const React = require('react')
const PropTypes = require('prop-types')

const Shutter = require('./Shutter')
const ErrorMessage = require('../ErrorMessage')

class Shutters extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	}

	constructor (props) {
		super(props)
		this.state = {
			shutters: [],
			errorMsg: null,
		}
	}

	async componentDidMount () {
		try {
			const response = await homeServerApi.get(`/shutters/shutter`)
			const shutters = Object.values(await response.json())
			this.setState({shutters})
		} catch (e) {
			this.setState({errorMsg: e.message})
		}
	}

	render () {
		return (
			<div id='shutters'>
				<h2>{this.props.title}</h2>
				{this.state.errorMsg && <ErrorMessage message={this.state.errorMsg}/>}
				{this.state.shutters.map(shutter => <Shutter key={shutter.name} shutter={shutter}/>)}
			</div>
		)
	}
}

module.exports = Shutters
