import './GameButton.css';

const GameButton = ({ border, color }) => {

  const buttonStyles = {
    backgroundColor: color,
    borderRadius: `${border === 'TL' ? 600 : 0}px ${border === 'TR' ? 600 : 0}px ${border === 'BR' ? 600 : 0}px ${border === 'BL' ? 600 : 0}px`,
    borderLeft: `${border === 'BR' || border === 'TR' ? '.5rem solid #fff' : 'none'}`,
    borderTop: `${border === 'BR' || border === 'BL' ? '.5rem solid #fff' : 'none'}`,
    borderRight: `${border === 'TL' || border === 'BL' ? '.5rem solid #fff' : 'none'}`,
    borderBottom: `${border === 'TL' || border === 'TR'? '.5rem solid #fff' : 'none'}`,
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