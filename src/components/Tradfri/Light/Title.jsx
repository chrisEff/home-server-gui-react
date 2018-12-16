'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setTradfriDeviceName} from '../../../actions'

class Title extends React.Component {

	static propTypes = {
		deviceId: PropTypes.number.isRequired,
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
					<button onClick={() => { this.setState({editMode: false}); this.props.onChange(this.props.deviceId, this.refs.title.value) }}>OK</button>
				</div>
			)
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, name) => dispatch(setTradfriDeviceName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Title)
export {Title}
