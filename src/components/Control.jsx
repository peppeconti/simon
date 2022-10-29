import './Control.css';

const Control = ({ start, round }) => {

  const startGame = () => {
    start();
  }

  return (
    <div className='control' >
        {round === 0 && <h2 className='start' onClick={startGame}>START</h2>}
        {round !== 0 && <h2 className='game'>Round {round}</h2>}
    </div>
  );
}

export default Control;