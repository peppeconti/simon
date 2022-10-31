import { useReducer, useRef, useEffect, useId, useState } from 'react';
import GameButton from './GameButton';
import Control from './Control';
import Modal from './Modal';
import { audio_files } from '../audio/audio';
import './Simon.css';

const initialState = {
  round: 0,
  sequence: [],
  player: {
    active: false,
    check: 0
  },
  gameOver: false
};

const error_sound = new Audio(audio_files[4]);

const reducer = (state, action) => {
  switch (action.type) {
    case 'new-round':
      return { ...state, round: state.round + 1, sequence: [...state.sequence, action.element], player: { ...state.player, check: 0 } };
    case 'switch-player':
      return { ...state, player: { ...state.player, active: !state.player.active } };
    case 'player-go-on':
      return { ...state, player: { ...state.player, check: state.player.check + 1 } };
    case 'game-over':
      error_sound.play();
      return { ...state, gameOver: true, player: { ...state.player, active: false } };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Simon = () => {

  const GameButtons = [
    {
      color: '#ff0000',
      border: 'TL',
      id: useId(),
      audio: new Audio(audio_files[0])
    },
    {
      color: '#297fb8',
      border: 'TR',
      id: useId(),
      audio: new Audio(audio_files[1])
    },
    {
      color: '#27ae61',
      border: 'BL',
      id: useId(),
      audio: new Audio(audio_files[2])
    },
    {
      color: '#f1c40f',
      border: 'BR',
      id: useId(),
      audio: new Audio(audio_files[3])
    }
  ];

  const refs = useRef([]);

  const [slide, setSlide] = useState('round__wrap');

  const [state, dispatch] = useReducer(reducer, initialState);

  const slide_sound = new Audio(audio_files[5]);

  const start = () => {
    dispatch({ type: 'new-round', element: Math.floor(Math.random() * 4) });
  };

  const checkSequence = (button, audio) => {
    if (state.player.active) {

      if (button === state.sequence[state.player.check]) {

        if (state.player.check + 1 === state.sequence.length) {
          audio.play();
          dispatch({ type: 'switch-player' });
          setTimeout(() => {
            setSlide('round__wrap down');
            slide_sound.play();
          }, 700);
        } else {
          audio.play();
          dispatch({ type: 'player-go-on' });
        }

      } else {
        dispatch({ type: 'game-over' });
      }

    }
  }


  useEffect(() => {

    const promises = state.sequence.map((el, i) => {
      return new Promise(res => {
        setTimeout(() => {
          refs.current[el].animate();
          res(el);
        }, 1000 * (i + 1))
        return res;
      });
    });

    if (promises.length) {
      Promise.allSettled(promises).then((res) => {
        setTimeout(() => {
          console.log(res)
          dispatch({ type: 'switch-player' });
        }, 700)
      });
    }


  }, [state.sequence]);

  return (
    <div className='board'>
      {GameButtons.map((e, i) => <GameButton ref={(button) => { refs.current[i] = button }} key={e.id} id={i} color={e.color} border={e.border} audio={e.audio} player={state.player.active} checkSequence={checkSequence} />)}
      <Control start={start} round={state.round} gameOver={state.gameOver} slide={slide} setSlide={setSlide} dispatch={dispatch} />
      {state.gameOver && <Modal round={state.round} dispatch={dispatch} />}
    </div>
  );
}

export default Simon;