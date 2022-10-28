import { forwardRef, useImperativeHandle, useState, useId } from 'react';
import GameButton from './GameButton';
import './ButtonWrapper.css';
import { useEffect } from 'react';

const ButtonWrapper = forwardRef((_, ref) => {

    const GameButtons = [
        {
            color: '#ff0000',
            border: 'TL',
            id: useId()
        },
        {
            color: '#297fb8',
            border: 'TR',
            id: useId()
        },
        {
            color: '#27ae61',
            border: 'BL',
            id: useId()
        },
        {
            color: '#f1c40f',
            border: 'BR',
            id: useId()
        }
    ];

    const [last, setLast] = useState(undefined);

    useImperativeHandle(ref, () => ({
        click(el) {
            setLast(el);
            console.log(el);
        }
    }), []);

    useEffect(() => {
        return setLast(undefined)
    },[])

    return (
        <div className='wrapper'>
            {GameButtons.map((e, i) => <GameButton last={last} key={e.id} id={i} color={e.color} border={e.border} />)}
        </div>
    )

})

export default ButtonWrapper;