import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = ({ dispatch }) => {
    return (
        <div className='back' onClick={() => dispatch({ type: 'reset' })} />
    );
};

const Message = ({ round }) => {

    return (
        <div className='message'>
            <p>Game Over!</p>
            <p>Level completed: {round - 1}</p>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ round, dispatch }) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop dispatch={dispatch} />, portalElement)}
            {ReactDOM.createPortal(<Message round={round} />, portalElement)}
        </Fragment>
    );
};

export default Modal;