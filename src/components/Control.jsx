import './Control.css';

const Control = ({ start, round }) => {

  const startGame = () => {
    start();
  }

  let button;

  if (round === 0) {
    button = <h2 className='start' onClick={startGame}>START</h2>
  } else if (round !== 0) {
    button = <h2 className='game'>Round
      <span className='round__wrap'>
        <span className='round__count'>55</span>
        <span className='round__count'>55</span>
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