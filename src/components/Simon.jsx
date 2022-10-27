import { useReducer, useEffect } from 'react';
import GameButton from './GameButton';
import Control from './Control';
import uuid from 'react-uuid';
import './Simon.css';

const initialState = {
  turn: 0,
  colors: [],
  last: undefined
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'turn':
      return { ...state, turn: state.turn + 1 };
    case 'extract-button':
      return { ...state, colors: [...state.colors, action.color] };
    case 'set-last':
      return { ...state, last: action.last };
    default:
      return state
  }
};

const Simon = () => {

  const GameButtons = [
    {
      color: '#ff0000',
      border: 'TL',
      id: uuid()
    },
    {
      color: '#297fb8',
      border: 'TR',
      id: uuid()
    },
    {
      color: '#27ae61',
      border: 'BL',
      id: uuid()
    },
    {
      color: '#f1c40f',
      border: 'BR',
      id: uuid()
    }
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    dispatch({ type: 'turn' });
    dispatch({ type: 'extract-button', color: Math.floor(Math.random() * 4) });
  };

  useEffect(() => {
    if (state.turn) {
      for (let i = 0; i < state.colors.length; i++) {
        setTimeout(() => {
          dispatch({ type: 'set-last', last: state.colors[i] });
          console.log(state)
        }, 2000)
      }
    }
  }, [state.colors, state.last, state.turn]);

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton key={e.id} id={i} color={e.color} border={e.border} last={state.last} />)}
      <Control start={start} turn={state.turn} />
    </div>
  );
}

export default Simon;