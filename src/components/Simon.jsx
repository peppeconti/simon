import GameButton from './GameButton';
import Control from './Control';
import './Simon.css';

const Simon = () => {
  return (
    <div className='board'>
      <GameButton color='#ff0000' TL={350} />
      <GameButton color='#297fb8' TR={350} />
      <GameButton color='#27ae61' BL={350} />
      <GameButton color='#f1c40f' BR={350} />
      <Control />
    </div>
  );
}

export default Simon;