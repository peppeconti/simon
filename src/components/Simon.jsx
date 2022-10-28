import { useReducer, useRef, useEffect, useId } from 'react';
import GameButton from './GameButton';
import Control from './Control';
// import uuid from 'react-uuid';
import './Simon.css';
import uuid from 'react-uuid';

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
      id: uuid(),
      ref: useRef()
    },
    {
      color: '#297fb8',
      border: 'TR',
      id: uuid(),
      ref: useRef()
    },
    {
      color: '#27ae61',
      border: 'BL',
      id: uuid(),
      ref: useRef()
    },
    {
      color: '#f1c40f',
      border: 'BR',
      id: uuid(),
      ref: useRef()
    }
  ];

  const gbRef = useRef(GameButtons);

  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    dispatch({ type: 'turn' });
    dispatch({ type: 'extract-button', color: Math.floor(Math.random() * 4) });
  };

  useEffect(() => {
    for (let i = 0; i < state.colors.length; i++) {
      setTimeout(() => {
        gbRef.current[state.colors[i]].ref.current.click(state.colors[i]);
      }, 1000 * (i + 1));
    }
  }, [state.colors])

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton ref={e.ref} key={e.id} id={i} color={e.color} border={e.border} />)}
      <Control start={start} turn={state.turn} />
    </div>
  );
}

export default Simon;