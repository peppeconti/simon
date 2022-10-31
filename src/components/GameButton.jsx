import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from '../hook/useMediaQuery';
import './GameButton.css';

const GameButton = forwardRef(({ border, color, id, audio, player, checkSequence }, ref) => {

  const medium = useMediaQuery('(max-width: 414px)');
  const small = useMediaQuery('(max-width: 375px)');
  const smaller = useMediaQuery('(max-width: 280px)');

  let boardSize;

  if (smaller) {
    boardSize = '.15rem';
  } else if (small) {
    boardSize ='.25rem';
  } else if (medium) {
    boardSize ='.3rem'; 
  } else {
    boardSize ='.5rem';
  }

  const buttonStyles = {
    backgroundColor: color,
    borderRadius: `${border === 'TL' ? 600 : 0}px ${border === 'TR' ? 600 : 0}px ${border === 'BR' ? 600 : 0}px ${border === 'BL' ? 600 : 0}px`,
    borderLeft: `${border === 'BR' || border === 'TR' ? `${boardSize} solid #15263F` : 'none'}`,
    borderTop: `${border === 'BR' || border === 'BL' ? `${boardSize} solid #15263F` : 'none'}`,
    borderRight: `${border === 'TL' || border === 'BL' ? `${boardSize} solid #15263F` : 'none'}`,
    borderBottom: `${border === 'TL' || border === 'TR' ? `${boardSize} solid #15263F` : 'none'}`,
  };

  const [animation, setAnimation] = useState(false);

  const startAnimation = () => {
    if (player) {
      setAnimation(true);
      checkSequence(id, audio);
    }
  }

  const resetAnimation = () => {
    setAnimation(false);
  }

  useImperativeHandle(ref, () => ({
    animate() {
      setAnimation(true);
      audio.play()
    }
  }), [audio]);

  if (animation) {
    return <motion.div
      className='button'
      style={buttonStyles}
      type='button'
      initial={{ opacity: .5, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", duration: .7 }}
      onAnimationComplete={resetAnimation}
    />;
  } else {
    return <div
      className='button'
      style={buttonStyles}
      type='button'
      onClick={startAnimation} />;
  }
})

export default GameButton;