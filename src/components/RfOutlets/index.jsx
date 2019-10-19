'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {css} from 'aphrodite'

import RfOutlet from './RfOutlet'

import {loadOutlets} from '@/actions/outlets'
import theme from '@/theme'

class RfOutlets extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		outlets: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
			})
		),
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return !this.props.outlets ? <div/> : (
			<div className={css([theme.styles.section])}>
				<h2>{this.props.title}</h2>
				<div className={css([theme.styles.sectionBody])}>
					{this.props.outlets.map(outlet =>
						<RfOutlet key={outlet.id} id={outlet.id}/>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	outlets: state.outlets,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadOutlets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlets)
