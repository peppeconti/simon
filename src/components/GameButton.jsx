import { forwardRef, useImperativeHandle, useState } from 'react';
import './GameButton.css';
import { motion } from "framer-motion";
import { audio_files } from '../audio/audio';

const GameButton = forwardRef(({ border, color, id }, ref) => {

  const buttonStyles = {
    backgroundColor: color,
    borderRadius: `${border === 'TL' ? 600 : 0}px ${border === 'TR' ? 600 : 0}px ${border === 'BR' ? 600 : 0}px ${border === 'BL' ? 600 : 0}px`,
    borderLeft: `${border === 'BR' || border === 'TR' ? '.5rem solid #fff' : 'none'}`,
    borderTop: `${border === 'BR' || border === 'BL' ? '.5rem solid #fff' : 'none'}`,
    borderRight: `${border === 'TL' || border === 'BL' ? '.5rem solid #fff' : 'none'}`,
    borderBottom: `${border === 'TL' || border === 'TR' ? '.5rem solid #fff' : 'none'}`,
  };

  const audio = new Audio(audio_files[id]);

  const [animation, setAnimation] = useState(false);

  useImperativeHandle(ref, () => ({
    animate(el) {
      setAnimation(true);
      audio.play();
      console.log(el)
    }
  }), []);

  const reset = () => {
    setAnimation(false);
  }

  if (animation) {
    return <motion.div
      className='button'
      style={buttonStyles}
      type='button'
      initial={{ opacity: .5, scale: .95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      onAnimationComplete={reset}
    />;
  } else {
    return <div className='button'
      style={buttonStyles}
      type='button' />;
  }
})

export default GameButton;