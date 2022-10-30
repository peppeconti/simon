import './Control.css';

const Control = ({ start, round, gameOver }) => {

  const startGame = () => {
    start();
  }

  let button;

  if (round === 0) {
    button = <h2 className='start' onClick={startGame}>START</h2>
  } else if (round !== 0) {
    button = <h2 className='game'>Round {round}</h2>
  }

  return (
    <div className='control' >
      {button}
    </div>
  );
}

export default Control;