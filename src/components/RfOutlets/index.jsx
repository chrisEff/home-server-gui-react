'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'

import RfOutlet from './RfOutlet'

import {loadOutlets} from '@/actions/outlets'

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
			<div id='rfOutlets' className={css([styles.rfOutlets])}>
				<h2>{this.props.title}</h2>
				{this.props.outlets.map(outlet =>
					<RfOutlet key={outlet.id} id={outlet.id}/>
				)}
			</div>
		)
	}
}

const styles = StyleSheet.create({
	rfOutlets: {
		display: 'inline-block',
	},
})

const mapStateToProps = state => ({
	outlets: state.outlets,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadOutlets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RfOutlets)
