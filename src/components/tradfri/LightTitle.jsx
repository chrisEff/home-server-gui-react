'use strict'

const React = require('react')
const PropTypes = require('prop-types')

class LightTitle extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		onChange: PropTypes.func,
	}

	constructor (props) {
		super(props)
		this.state = {editMode: false}
	}

	render () {
		if (!this.state.editMode) {
			return (
				<span className={this.props.title.length > 15 ? 'name long' : 'name'} onClick={() => this.setState({editMode: true})}>
					{this.props.title}
				</span>
			)
		} else {
			return (
				<div>
					<input type='text' ref='title' style={{width: 110}} defaultValue={this.props.title} />
					<button onClick={() => { this.setState({editMode: false}); this.props.onChange(this.refs.title.value) }}>OK</button>
				</div>
			)
		}
	}
}

module.exports = LightTitle
