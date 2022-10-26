import React from 'react';
import GameButton from './GameButton';
import Control from './Control';
import './Simon.css';

const Simon = () => {

  const GameButtons = [
    {
      color: '#ff0000',
      border: 'TL'
    },
    {
      color: '#297fb8',
      border: 'TR'
    },
    {
      color: '#27ae61',
      border: 'BL'
    },
    {
      color: '#f1c40f',
      border: 'BR'
    }
  ]

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton key={i} color={e.color} border={e.border} />)}
      <Control />
    </div>
  );
}

export default Simon;