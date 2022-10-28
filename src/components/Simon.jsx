import { useReducer, useRef, useEffect } from 'react';
import Control from './Control';
import ButtonWrapper from './ButtonWrapper';
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const wrapperRef = useRef();

  const start = () => {
    dispatch({ type: 'turn' });
    dispatch({ type: 'extract-button', color: Math.floor(Math.random() * 4) });
  };

  useEffect(() => {
    for (let i = 0; i < state.colors.length; i++) {
      setTimeout(() => {
        wrapperRef.current.click(state.colors[i]);
      }, 1000 * (i + 1));
    }
  }, [state.colors])



  return (
    <div className='board'>
      <ButtonWrapper ref={wrapperRef} />
      <Control start={start} turn={state.turn} />
    </div>
  );
}

export default Simon;