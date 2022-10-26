import GameButton from './GameButton';
import Control from './Control';
import './Simon.css';

const Simon = () => {

  const GameButtons = [
    {
      color: '#ff0000',
      TL: '600',
      top: '-5%',
      left: '-5%'
    },
    {
      color: '#297fb8',
      TR: '600',
      top: '-5%',
      left: '5%'
    },
    {
      color: '#27ae61',
      BL: '600',
      top: '5%',
      left: '-5%'
    },
    {
      color: '#f1c40f',
      BR: '600',
      top: '5%',
      left: '5%'
    }
  ]

  return (
    <div className='board'>
      {GameButtons.map((obj, i) => <GameButton key={i} className='button' color={obj.color} top={obj.top} left={obj.left} />)}
      <Control />
    </div>
  );
}

export default Simon;