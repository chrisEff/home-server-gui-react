module.exports = ({state, onchange}) =>
  <div className='bulb' onClick={() => onchange(state ? 0 : 1)}>💡</div>
