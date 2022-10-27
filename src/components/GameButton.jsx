import { useEffect } from 'react';
import { useState } from 'react';
import './GameButton.css';

const GameButton = ({ border, color, className }) => {

  const buttonStyles = {
    backgroundColor: color,
    borderRadius: `${border === 'TL' ? 600 : 0}px ${border === 'TR' ? 600 : 0}px ${border === 'BR' ? 600 : 0}px ${border === 'BL' ? 600 : 0}px`,
    borderLeft: `${border === 'BR' || border === 'TR' ? '.5rem solid #fff' : 'none'}`,
    borderTop: `${border === 'BR' || border === 'BL' ? '.5rem solid #fff' : 'none'}`,
    borderRight: `${border === 'TL' || border === 'BL' ? '.5rem solid #fff' : 'none'}`,
    borderBottom: `${border === 'TL' || border === 'TR' ? '.5rem solid #fff' : 'none'}`,
  }

  const [animated, setAnimated] = useState(true)

  const removeClass = () => {
    setAnimated(false);
  }

  useEffect(() => {
    setAnimated(true);
  },[animated])

  return (
    <div type='button' className={`button ${animated? className : 'none'}`} style={buttonStyles} onAnimationEnd={removeClass} />
  );
}

export default GameButton;