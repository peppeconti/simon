import './GameButton.css';

const GameButton = ({ TL, TR, BL, BR, color, top, left }) => {

  const buttonStyles = {
    backgroundColor: color,
    borderRadius: `${TL ? TL : 0}px ${TR ? TR : 0}px ${BR ? BR : 0}px ${BL ? BL : 0}px`
  }

  const absStyles = {
    backgroundColor: 'inherit',
    top: top,
    left: left,
    borderRadius: 'inherit',
  }

  return (
      <div type='button' className='button' style={buttonStyles} >
        <div className='active' style={absStyles} />
      </div>
  );
}

export default GameButton;