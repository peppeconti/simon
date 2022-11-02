import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import './Modal.css';

const Backdrop = () => {
    return (
        <motion.div
            className='back'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: .5 }}

        />
    );
};

const ResetButton = ({ dispatch }) => {
    return (
        <motion.button
            type='button'
            className='reset'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .3, delay: .5 }}
            onClick={() => dispatch({ type: 'reset' })}

        >
            <FontAwesomeIcon icon={faArrowLeft} size='2x' />
        </motion.button>
    );
};

const Message = ({ round }) => {

    return (
        <div className='message'>
            <motion.p
                className='game__over'
                initial={{ y: '30%', scale: .5, opacity: 0 }}
                animate={{ y: 1, scale: 1, opacity: 1 }}
                transition={{ duration: .3, ease: 'easeOut', delay: .5 }}
            >Game Over!</motion.p>
            <motion.p
                className='round__completed'
                initial={{ y: '30%', scale: .5, opacity: 0 }}
                animate={{ y: 1, scale: 1, opacity: 1 }}
                transition={{ duration: .3, ease: 'easeOut', delay: .75 }}
            >Level completed: {round - 1}</motion.p>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ round, dispatch }) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<Message round={round} />, portalElement)}
            {ReactDOM.createPortal(<ResetButton dispatch={dispatch} />, portalElement)}
        </Fragment>
    );
};

export default Modal;