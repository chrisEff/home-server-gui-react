module.exports = ({bulbType, color, onchange}) => {  
  if (bulbType === 'rgb') {
    return (
      <div className='color-switcher'>
        <div className={color === 'red'     ? 'color red active'     : 'color red'}     onClick={() => onchange('red')}/>
        <div className={color === 'green'   ? 'color green active'   : 'color green'}   onClick={() => onchange('green')}/>
        <div className={color === 'blue'    ? 'color blue active'    : 'color blue'}    onClick={() => onchange('blue')}/>
        <div className={color === 'yellow'  ? 'color yellow active'  : 'color yellow'}  onClick={() => onchange('yellow')}/>
        <div className={color === 'pink'    ? 'color pink active'    : 'color pink'}    onClick={() => onchange('pink')}/>
        <div className={color === 'purple'  ? 'color purple active'  : 'color purple'}  onClick={() => onchange('purple')}/>
        <div className={color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={() => onchange('warm')}/>
        <div className={color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={() => onchange('neutral')}/>
        <div className={color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={() => onchange('cold')}/>
      </div>
    )
  }
  if (bulbType === 'white-spectrum') {
    return (
      <div className='color-switcher spectrum'>
        <div className={color === 'warm'    ? 'color warm active'    : 'color warm'}    onClick={() => onchange('warm')}/>
        <div className={color === 'neutral' ? 'color neutral active' : 'color neutral'} onClick={() => onchange('neutral')}/>
        <div className={color === 'cold'    ? 'color cold active'    : 'color cold'}    onClick={() => onchange('cold')}/>
      </div>
    )
  }
  if (bulbType === 'white') {
    return (
      <div className='color-switcher white'>
        <div className='color neutral active' />
      </div>
    )
  }
  return <div/>
}
