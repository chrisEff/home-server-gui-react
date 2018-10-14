module.exports = ({brightness, onchange}) =>
  <input className='brightness-slider'
         type='range' min='0' max='254' defaultValue={brightness}
         onMouseUp={(e) => onchange(e.target.value)}/>
