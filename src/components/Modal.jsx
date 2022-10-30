import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = () => {
    return (
        <div className='back' />
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

const Modal = ({ round }) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<Message round={round} />, portalElement)}
        </Fragment>
    );
};

export default Modal;