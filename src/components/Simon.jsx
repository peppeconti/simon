import { useReducer, useRef, useEffect, useId } from 'react';
import GameButton from './GameButton';
import Control from './Control';
import audio_error from '../audio/error.mp3';
import './Simon.css';

const initialState = {
  round: 0,
  colors: [],
  player: false,
  gameOver: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'round':
      return { ...state, round: state.round + 1 };
    case 'extract-button':
      return { ...state, colors: [...state.colors, action.color] };
    case 'switch-player':
      return { ...state, player: !state.player };
    case 'game-over':
      return { ...state, gameOver: true };
    default:
      return state;
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
    dispatch({ type: 'round' });
    dispatch({ type: 'extract-button', color: Math.floor(Math.random() * 4) });
  };

  const checkPlayer = () => {

  }

  useEffect(() => {
    state.colors.forEach((el, i) => {
      setTimeout(() => {
        refs.current[el].animate(el);
      }, 1000 * (i + 1));
    })
    dispatch({ type: 'switch-player' });
  }, [state.colors])

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton ref={(button) => { refs.current[i] = button }} key={e.id} id={i} color={e.color} border={e.border} player={state.player} />)}
      <Control start={start} round={state.round} />
    </div>
  );
}

export default Simon;