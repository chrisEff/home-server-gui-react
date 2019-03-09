'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {setOutletState} from '@/actions/outlets'

const RfOutlet = ({outlet, onToggle}) => {
	return (
		<div style={styles.outlet} className={outlet.state ? 'outlet on' : 'outlet'} onClick={() => onToggle(outlet.id, outlet.state ? 0 : 1)}>
			<h4>{outlet.name}</h4>
			<div style={outlet.state ? {...styles.plug, ...styles.on} : styles.plug} className='plug'>🔌</div>
		</div>
	)
}

RfOutlet.propTypes = {
	id: PropTypes.number,
	outlet: PropTypes.object.isRequired,
	onToggle: PropTypes.func,
}

const styles = {
	outlet: {
		height: '200px',
	},
	plug: {
		filter: 'grayscale(100%) blur(5px)',
		fontSize: 80,
		paddingTop: '40px',
		textAlign: 'center',
		userSelect: 'none',
	},
	on: {
		filter: 'none',
		textShadow: '0 0 1px black, 0 0 50px #f5faf6',
	},
}

const mapStateToProps = (state, ownProps) => ({
	outlet: state.outlets.find(outlet => outlet.id === ownProps.id),
})

const mapDispatchToProps = dispatch => ({
	onToggle: (id, state) => dispatch(setOutletState(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlet)
export {RfOutlet}
