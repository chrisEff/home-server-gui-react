'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {css} from 'aphrodite'

import Shutter from './Shutter'

import {loadShutters} from '@/actions/shutters'
import theme from '@/theme'

class Shutters extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		shutters: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
			})
		),
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return !this.props.shutters ? <div/> : (
			<div className={css([theme.styles.section])}>
				<h2>{this.props.title}</h2>
				<div className={css([theme.styles.sectionBody])}>
					{this.props.shutters.map(shutter =>
						<Shutter key={shutter.id} id={shutter.id}/>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	shutters: state.shutters,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadShutters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shutters)
