import { useReducer, useRef, useEffect, useId } from 'react';
import GameButton from './GameButton';
import Control from './Control';
// import uuid from 'react-uuid';
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
      id: useId()
    },
    {
      color: '#297fb8',
      border: 'TR',
      id: useId()
    },
    {
      color: '#27ae61',
      border: 'BL',
      id: useId()
    },
    {
      color: '#f1c40f',
      border: 'BR',
      id: useId()
    }
  ];

  const refs = useRef([])

  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    dispatch({ type: 'turn' });
    dispatch({ type: 'extract-button', color: Math.floor(Math.random() * 4) });
  };

  useEffect(() => {
    state.colors.forEach((el, i) => {
      setTimeout(() => {
        refs.current[el].animate(el);
      }, 1000 * (i + 1));
    })
  }, [state.colors])



  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton ref={(button) => {refs.current[i] = button}}  key={e.id} id={i} color={e.color} border={e.border} />)}
      <Control start={start} turn={state.turn} />
    </div>
  );
}

export default Simon;