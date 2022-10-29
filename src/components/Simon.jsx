import { useReducer, useRef, useEffect, useId } from 'react';
import GameButton from './GameButton';
import Control from './Control';
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'round':
      return { ...state, round: state.round + 1 };
    case 'create-sequence':
      return { ...state, sequence: [...state.sequence, action.element], player: { ...state.player, check: 0 } };
    case 'switch-player':
      return { ...state, player: { ...state.player, active: !state.player.active } };
    case 'player-go-on':
      return { ...state, player: { ...state.player, check: state.player.check + 1 } };
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

  const refs = useRef([])

  const [state, dispatch] = useReducer(reducer, initialState);

  const error = new Audio(audio_files[4]);

  const start = () => {
    dispatch({ type: 'round' });
    dispatch({ type: 'create-sequence', element: Math.floor(Math.random() * 4) });
  };

  const checkSequence = (button, audio) => {
    if (state.player.active) {

      if (button === state.sequence[state.player.check]) {

        if (state.player.check + 1 === state.sequence.length) {
          audio.play();
          dispatch({ type: 'switch-player' });
          setTimeout(() => {
            dispatch({ type: 'round' });
            dispatch({ type: 'create-sequence', element: Math.floor(Math.random() * 4) });
          }, 700)
        } else {
          audio.play();
          dispatch({ type: 'player-go-on' });
        }
      } else if (button !== state.sequence[state.player.check]) {
        dispatch({ type: 'game-over' });
        dispatch({ type: 'switch-player' });
        error.play();
      }

    }
  }


  useEffect(() => {

    const promises = state.sequence.map((el, i) => {
      return new Promise(res => {
        setTimeout(() => res(refs.current[el].animate()), 1000 * (i + 1))
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
      <Control start={start} round={state.round} gameOver={state.gameOver} />
    </div>
  );
}

export default Simon;