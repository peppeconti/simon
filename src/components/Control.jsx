import './Control.css';

const Control = ({ start }) => {
  return (
    <div className='control'>
      <h2 onClick={() => start()}>
        START
      </h2>
    </div>
  );
}

export default Control;