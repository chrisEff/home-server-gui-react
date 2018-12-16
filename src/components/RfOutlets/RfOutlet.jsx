'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {setOutletState} from '../../actions/outlets'

const RfOutlet = ({outlet, onToggle}) => {
	return (
		<div className={outlet.state ? 'outlet on' : 'outlet'} onClick={() => onToggle(outlet.id, outlet.state ? 0 : 1)}>
			<h4>{outlet.name}</h4>
			<div className='plug'>🔌</div>
		</div>
	)
}

RfOutlet.propTypes = {
	id: PropTypes.number,
	outlet: PropTypes.object.isRequired,
	onToggle: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
	outlet: state.outlets.find(outlet => outlet.id === ownProps.id),
})

const mapDispatchToProps = dispatch => ({
	onToggle: (id, state) => dispatch(setOutletState(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlet)
export {RfOutlet}
