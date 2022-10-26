import './GameButton.css';

const GameButton = ({ TL, TR, BL, BR, color }) => {

  const buttonStyles = {
    backgroundColor: color,
    borderRadius: `${TL ? TL : 0}px ${TR ? TR : 0}px ${BR ? BR : 0}px ${BL ? BL : 0}px`,
    borderLeft: `${BR || TR ? '.5rem solid #fff' : 'none'}`,
    borderTop: `${BL || BR ? '.5rem solid #fff' : 'none'}`,
    borderRight: `${TL || BL ? '.5rem solid #fff' : 'none'}`,
    borderBottom: `${TL || TR ? '.5rem solid #fff' : 'none'}`,
  }

  /*const absStyles = {
    backgroundColor: 'inherit',
    top: top,
    left: left,
    borderRadius: 'inherit',
  }*/

  return (
    <div type='button' className='button' style={buttonStyles} />
  );
}

export default GameButton;


/*{TL && <div className='active' style={absStyles} />}*/