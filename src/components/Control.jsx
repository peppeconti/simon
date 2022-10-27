import './Control.css';

const Control = ({ start, turn }) => {

  const startGame = () => {
    start();
  }

  return (
    <div className='control' onClick={startGame}>
        {turn === 0 && <h2 className='start'>START</h2>}
        {turn !== 0 && <h2 className='game'>Round {turn}</h2>}
    </div>
  );
}

export default Control;