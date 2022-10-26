import { useReducer, useEffect } from 'react';
import GameButton from './GameButton';
import Control from './Control';
import './Simon.css';

const initialState = {
  turn: 0,
  colors: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, turn: state.turn + 1 };
    case 'extract':
      return { ...state, colors: [...state.colors, action.color] };
    default:
      return state
  }
};

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
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    dispatch({ type: 'start' });
    const color = Math.floor(Math.random() * 3);
    dispatch({ type: 'extract', color: color });
  };

  useEffect(() => {
    for (let i = 0; i < state.turn; i++) {
      setTimeout(() => {
        console.log(state.colors[i])
      }, 1000)
    }
  }, [state])

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton key={i} color={e.color} border={e.border} />)}
      <Control start={start} />
    </div>
  );
}

export default Simon;