import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './Modal.css';

const Backdrop = ({ dispatch }) => {
    return (
        <motion.div
            className='back'
            onClick={() => dispatch({ type: 'reset' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}

        />
    );
};

const Message = ({ round }) => {

    return (
        <div className='message'>
            <motion.p
                className='game__over'
                initial={{ y: '30%', scale: .5, opacity: 0 }}
                animate={{ y: 1, scale: 1, opacity: 1 }}
                transition={{ duration: .2, ease: 'easeOut', delay: 1.5 }}
            >Game Over!</motion.p>
            <motion.p
                className='round__completed'
                initial={{ y: '30%', scale: .5, opacity: 0 }}
                animate={{ y: 1, scale: 1, opacity: 1 }}
                transition={{ duration: .2, ease: 'easeOut', delay: 1.75 }}
            >Level completed: {round - 1}</motion.p>
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