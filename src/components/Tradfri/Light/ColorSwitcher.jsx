'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setDeviceColor} from '@/actions/tradfri'

const ColorSwitcher = ({deviceId, bulbType, selected, onChange}) => {
	let colors = ['neutral']
	if (bulbType === 'rgb') {
		colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'warm', 'neutral', 'cold']
	} else if (bulbType === 'white-spectrum') {
		colors = ['warm', 'neutral', 'cold']
	}

	return (
		<div style={styles.colorSwitcher}>
			{colors.map(color => (
				<div key={`${deviceId}-color-${color}`} style={styles.color(selected === color)} onClick={() => onChange(deviceId, color)}>
					<div style={{...styles.inner, ...styles.colors[color]}} />
				</div>
			))}
		</div>
	)
}

ColorSwitcher.propTypes = {
	deviceId: PropTypes.number.isRequired,
	bulbType: PropTypes.string.isRequired,
	selected: PropTypes.string,
	onchange: PropTypes.func,
}

const styles = {
	colorSwitcher: {
		fontSize: 0,
	},
	color: (active) => ({
		borderRadius: '20px',
		border: active ? '2px solid #eee' : '2px solid transparent',
		display: 'inline-block',
	}),
	inner: {
		borderRadius: '15px',
		margin: '3px',
		height: '29px',
		width: '29px',
	},
	colors: {
		warm:    {backgroundColor: '#efd275'},
		neutral: {backgroundColor: '#f1e0b5'},
		cold:    {backgroundColor: '#f5faf6'},
		red:     {backgroundColor: 'red'},
		green:   {backgroundColor: 'green'},
		blue:    {backgroundColor: 'blue'},
		yellow:  {backgroundColor: 'yellow'},
		pink:    {backgroundColor: 'deeppink'},
		purple:  {backgroundColor: 'mediumpurple'},
	},
}

const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = dispatch => ({
	onChange: (id, color) => dispatch(setDeviceColor(id, color)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwitcher)
export {ColorSwitcher}
