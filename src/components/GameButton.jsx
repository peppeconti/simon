import './GameButton.css';

const GameButton = ({ TL, TR, BL, BR, color }) => {

const styles = {
    backgroundColor: `${color}`,
    borderRadius: `${TL? TL : 0}px ${TR? TR : 0}px ${BR? BR : 0}px ${BL? BL : 0}px`
} 

  return (
    <div type='button' className='button' style={styles}>
    </div>
  );
}

export default GameButton;