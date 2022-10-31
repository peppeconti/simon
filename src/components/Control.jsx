import './Control.css';

const Control = ({ start, round, slide, setSlide, dispatch }) => {

  const startHandler = () => {
    start();
  }

  const nextRoundHandler = () => {
    setSlide('round__wrap');
    dispatch({ type: 'new-round', element: Math.floor(Math.random() * 4) });
  }

  let button;

  if (round === 0) {
    button = <h2 className='start' onClick={startHandler}>START</h2>
  } else if (round !== 0) {
    button = <h2 className='game'>Round&#160;
      <span className={slide} onTransitionEnd={nextRoundHandler}>
        <span className='round__count'>{round + 1}</span>
        <span className='round__count'>{round}</span>
      </span>
    </h2>
  }

  return (
    <div className='control' >
      {button}
    </div>
  );
}

export default Control;