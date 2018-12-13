'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'

import {toggleOutlet} from '../../actions'
import {connect} from 'react-redux'

class RfOutlet extends React.Component {

	static propTypes = {
		id: PropTypes.number,
		outlet: PropTypes.object.isRequired,
		onToggle: PropTypes.func,
	}

	render () {
		const className = this.props.outlet.state ? 'outlet on' : 'outlet'
		return (
			<div className={className} onClick={this.handleClick}>
				<h4>{this.props.outlet.name}</h4>
				<div className='plug'>🔌</div>
			</div>
		)
	}

	handleClick = async () => {
		const outlet = this.props.outlet
		await homeServerApi.put(`/rfoutlets/outlet/${outlet.id}/${outlet.state ? 0 : 1}`)

		this.props.onToggle(outlet.id)
	}
}

const mapStateToProps = (state, ownProps) => ({
	outlet: state.outlets.find(outlet => outlet.id === ownProps.id),
})

const mapDispatchToProps = dispatch => ({
	onToggle: id => dispatch(toggleOutlet(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlet)
export {RfOutlet}
