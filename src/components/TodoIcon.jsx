import React from 'react';
import { ReactComponent as CheckIcon } from '../assets/icons/confirm.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/borrar.svg';
import '../styles/TodoIcon.css';

const iconTYpes = {
    "check": color => (
        <CheckIcon className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <DeleteIcon className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
} 
function TodoIcon ({type, color}) {
    return (
        <span
        className={`Icon-container Icon-container--${type}`}>
            {iconTYpes[type](color)}
        </span>
    )
}

export {TodoIcon};