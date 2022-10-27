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
    case 'turn':
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
    dispatch({ type: 'turn' });
    dispatch({ type: 'extract', color: Math.floor(Math.random() * 4) });
  };

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton key={i} className={i === state.colors[state.colors.length -1]? 'bounce' : 'none'} color={e.color} border={e.border} />)}
      <Control start={start} />
    </div>
  );
}

export default Simon;