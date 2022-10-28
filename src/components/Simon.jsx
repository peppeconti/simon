import { useReducer, useEffect, useCallback, useRef } from 'react';
import GameButton from './GameButton';
import Control from './Control';
import uuid from 'react-uuid';
import './Simon.css';

const initialState = {
  turn: 0,
  colors: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'turn':
      return { ...state, turn: state.turn + 1 };
    case 'extract-button':
      return { ...state, colors: [...state.colors, action.color] };
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

  const ref = useRef();

  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    dispatch({ type: 'turn' });
    dispatch({ type: 'extract-button', color: Math.floor(Math.random() * 4) });
  };

  const setDelay = useCallback((el) => {
    setTimeout(() => {
      ref.current.click(el);
    }, 2000);
  }, [])

  useEffect(() => {
    for (let i = 0; i < state.colors.length; i++) {
      setDelay(state.colors[i]);
    }
  }, [state.colors, setDelay]);

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton ref={ref} key={e.id} id={i} color={e.color} border={e.border} />)}
      <Control start={start} turn={state.turn} />
    </div>
  );
}

export default Simon;