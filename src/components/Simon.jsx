import GameButton from './GameButton';
import Control from './Control';
import './Simon.css';

const Simon = () => {
  return (
    <div className='board'>
      <GameButton color='#ff0000' TL={600} />
      <GameButton color='#297fb8' TR={600} />
      <GameButton color='#27ae61' BL={600} />
      <GameButton color='#f1c40f' BR={600} />
      <Control />
    </div>
  );
}

export default Simon;